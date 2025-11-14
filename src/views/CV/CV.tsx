import { useState } from 'react';
import { Layout } from '@/components/Layout';
import {
  Tabs,
  Tab,
  ButtonWrapper,
  DownloadButton,
  PDFViewer,
  LastUpdated,
} from './CV.styles';

type CVVersion = 'short' | 'extended';

export function CV() {
  const [activeTab, setActiveTab] = useState<CVVersion>('short');

  const cvFiles = {
    short: '/wilson-alberto_cv.pdf',
    extended: '/wilson-alberto_cv-extended.pdf',
  };

  return (
    <Layout title="Curriculum Vitae">
      <h4>Download my CV</h4>
      <p>Choose the version that fits your needs:</p>

      <Tabs>
        <Tab
          $active={activeTab === 'short'}
          onClick={() => setActiveTab('short')}
        >
          Short
        </Tab>
        <Tab
          $active={activeTab === 'extended'}
          onClick={() => setActiveTab('extended')}
        >
          Extended
        </Tab>
      </Tabs>

      <ButtonWrapper>
        <DownloadButton href={cvFiles[activeTab]} download>
          Download {activeTab === 'short' ? 'Short' : 'Extended'} CV (PDF)
        </DownloadButton>
      </ButtonWrapper>

      <PDFViewer
        src={`${cvFiles[activeTab]}#view=FitH&toolbar=0&navpanes=0`}
        title="CV Preview"
      />

      <LastUpdated>Last updated: November 2025</LastUpdated>
    </Layout>
  );
}
