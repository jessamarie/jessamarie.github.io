import { describe, it, expect } from 'vitest';
import { projects } from './data';

describe('projects data', () => {
  it('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('has unique ids', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every project has a non-empty name and description', () => {
    for (const p of projects) {
      expect(p.name.trim().length).toBeGreaterThan(0);
      expect(p.description.trim().length).toBeGreaterThan(0);
    }
  });

  it('every repo URL is an https github link', () => {
    for (const p of projects) {
      expect(p.repo).toMatch(/^https:\/\/github\.com\//);
    }
  });

  it('optional homepage, when set, is an https URL', () => {
    for (const p of projects) {
      if (p.homepage) expect(p.homepage).toMatch(/^https:\/\//);
    }
  });

  it('every project lists at least one technology and has an image', () => {
    for (const p of projects) {
      expect(p.technologies.length).toBeGreaterThan(0);
      expect(p.image).toBeTruthy();
    }
  });
});
