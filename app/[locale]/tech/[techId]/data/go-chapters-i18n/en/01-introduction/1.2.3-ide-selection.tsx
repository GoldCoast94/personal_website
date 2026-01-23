import React from 'react';

interface Props {
  className?: string;
}

export default function IdeSelection({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.2.3 IDE Selection</h3>
      <p>Recommended development tools:
1. <strong>Visual Studio Code</strong> + Go extension (recommended)
2. <strong>GoLand</strong> (by JetBrains, feature-rich)
3. <strong>Vim/Neovim</strong> + vim-go plugin
4. <strong>Sublime Text</strong> + GoSublime plugin</p>
      <p>## 1.3 First Go Program</p>

    </div>
  );
}

export const metadata = {
  id: '1-2-3',
  title: 'IDE Selection',
  section: '1.2.3'
};
