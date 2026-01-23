import React from 'react';

interface Props {
  className?: string;
}

export default function DownloadInstall({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">1.2.1 Download and Installation</h3>

      <ul>
        <li>Visit the official website: https://golang.org/dl/ (or https://golang.google.cn/dl/ for China)</li>
        <li>Download the installer for your operating system</li>
        <li>Follow the installation wizard to complete the installation</li>
      </ul>

      <ul>
        <li>**macOS**</li>
      </ul>

      <pre className="code-block">
        <code className="language-bash">{`# Install using Homebrew
brew install go`}</code>
      </pre>

      <ul>
        <li>**Linux**</li>
      </ul>

      <pre className="code-block">
        <code className="language-bash">{`# Download and extract
wget https://golang.org/dl/go1.21.0.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.21.0.linux-amd64.tar.gz

# Configure environment variables
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc`}</code>
      </pre>

      <ul>
        <li>**Windows**</li>
        <li>Download the MSI installer and double-click to install</li>
      </ul>

    </div>
  );
}

export const metadata = {
  id: '1-2-1',
  title: 'Download and Installation',
  section: '1.2.1'
};
