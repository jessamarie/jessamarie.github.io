import { DevTo } from 'styled-icons/boxicons-logos';
import { FilePdf } from 'styled-icons/boxicons-solid';
import { Linkedin, Github } from 'styled-icons/entypo-social';

import { Hashnode } from 'styled-icons/simple-icons';

const Links = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/jessicamariebarre/',
    label: 'LinkedIn',
    icon: Linkedin
  },
  {
    id: 2,
    url: 'https://github.com/jessamarie',
    label: 'GitHub',
    icon: Github
  },
  {
    id: 3,
    url: 'https://docs.google.com/document/d/1vYktTZyz8bN_rlO52Wiklb_ktUTCECoCdm6XBASwRUQ/preview',
    label: 'Resume',
    icon: FilePdf
  },
  {
    id: 5,
    url: 'https://dev.to/jessamarie',
    label: 'DevTo',
    icon: DevTo
  },
  {
    id: 6,
    url: 'https://jessamarie.hashnode.dev',
    label: 'Hashnode',
    icon: Hashnode
  }
];

export default Links;
