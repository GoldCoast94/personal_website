export interface NavItem {
  id: string;
  name: string;
  link: string;
  description?: string;
  content?: string;
  codeExample?: string;
  cases?: Array<{
    title: string;
    description: string;
    code?: string;
  }>;
}

export interface ContentSection {
  title: string;
  items: NavItem[];
}

export interface TechDetail {
  name: string;
  description: string;
  icon: string;
  color: string;
  officialLink: string;
  content: ContentSection[];
}

export interface Example {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}
