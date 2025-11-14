import { CVDownloadSection, CVLink } from './CVDownload.styles';

export function CVDownload() {
  return (
    <CVDownloadSection>
      <p>
        <CVLink href="/cv/">Check out my full CV</CVLink> or download the{' '}
        <CVLink href="/wilson-alberto_cv.pdf" download>
          short version
        </CVLink>{' '}
        /{' '}
        <CVLink href="/wilson-alberto_cv-extended.pdf" download>
          extended version
        </CVLink>
        .
      </p>
    </CVDownloadSection>
  );
}
