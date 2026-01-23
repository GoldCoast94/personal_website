import React from 'react';

interface Props {
  className?: string;
}

export default function CoverageReport({ className }: Props) {
  return (
    <div className={`section-content ${className || ''}`}>
      <h3 className="section-title">10.7.1 Coverage Report</h3>

      <pre className="code-block">
        <code className="language-bash">{`# Run tests and generate coverage
go test -cover

# Generate detailed coverage report
go test -coverprofile=coverage.out

# View coverage details
go tool cover -func=coverage.out

# Generate HTML report
go tool cover -html=coverage.out`}</code>
      </pre>

    </div>
  );
}

export const metadata = {
  id: '10-7-1',
  title: 'Coverage Report',
  section: '10.7.1'
};
