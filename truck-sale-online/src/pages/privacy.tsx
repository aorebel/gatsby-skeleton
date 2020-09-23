import React from 'react';
import { graphql, PageProps } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { PrivacyPageQuery } from '@/generated/graphql';
import { css } from '@emotion/core';

const pageContent = css`
  margin-top: 80px;
  margin-bottom: 80px;
  padding-left: 10%;
  padding-right: 10%;
`;

const Privacy: React.FC<PageProps<PrivacyPageQuery>> = ({ data }) => (
  <section css={pageContent}>
    <ReactMarkdown source={data.strapiTrackSaleOnline.privacyPageContent} />
  </section>
);

export const pageQuery = graphql`
  query PrivacyPage {
    strapiTrackSaleOnline {
      privacyPageContent
    }
  }
`;

export default Privacy;
