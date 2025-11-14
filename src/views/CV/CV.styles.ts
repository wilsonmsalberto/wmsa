import styled from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Tab = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  color: ${(props) => (props.$active ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  font-size: 1.8rem;
  font-family: inherit;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-bottom: 2px solid
    ${(props) => (props.$active ? '#fff' : 'transparent')};
  transition: all 0.2s ease;
  margin-bottom: -1px;

  &:hover {
    color: #fff;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 1.5rem 0 2rem 0;
`;

export const DownloadButton = styled.a`
  display: inline-block;
  background: #ffe200;
  color: #272727;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: #ffd700;
    transform: translateY(-1px);
    text-decoration: none;
  }
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 0.5rem 0 1rem;
`;

export const PDFViewer = styled.iframe`
  width: 100%;
  max-width: 800px;
  height: 1000px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  background: #fff;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const LastUpdated = styled.small`
  display: block;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 1rem;
`;
