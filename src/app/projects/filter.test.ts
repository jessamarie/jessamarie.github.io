import { describe, it, expect } from 'vitest';
import { filterRepos, type GithubRepo } from './filter';

const repo = (over: Partial<GithubRepo>): GithubRepo => ({
  id: Math.floor(Math.random() * 1e6),
  name: 'example',
  description: null,
  html_url: 'https://github.com/jessamarie/example',
  fork: false,
  ...over,
});

describe('filterRepos', () => {
  it('drops forks', () => {
    const input = [repo({ name: 'a', fork: true }), repo({ name: 'b', fork: false })];
    const out = filterRepos(input, []);
    expect(out.map((r) => r.name)).toEqual(['b']);
  });

  it('drops repos already featured, case-insensitively', () => {
    const input = [
      repo({ name: 'Recall' }),
      repo({ name: 'mystery-lunch' }),
      repo({ name: 'other' }),
    ];
    const out = filterRepos(input, ['recall', 'Mystery-Lunch']);
    expect(out.map((r) => r.name)).toEqual(['other']);
  });

  it('drops both forks and featured together', () => {
    const input = [
      repo({ name: 'Recall', fork: false }),
      repo({ name: 'forked', fork: true }),
      repo({ name: 'keeper', fork: false }),
    ];
    const out = filterRepos(input, ['recall']);
    expect(out.map((r) => r.name)).toEqual(['keeper']);
  });

  it('returns an empty array when given no repos', () => {
    expect(filterRepos([], ['recall'])).toEqual([]);
  });

  it('keeps everything when nothing is a fork or featured', () => {
    const input = [repo({ name: 'a' }), repo({ name: 'b' })];
    expect(filterRepos(input, []).map((r) => r.name)).toEqual(['a', 'b']);
  });

  it('preserves the repo objects it keeps', () => {
    const keeper = repo({ name: 'keeper', description: 'hi', html_url: 'https://x/y' });
    const [out] = filterRepos([keeper], []);
    expect(out).toEqual({
      id: keeper.id,
      name: 'keeper',
      description: 'hi',
      html_url: 'https://x/y',
      fork: false,
    });
  });
});
