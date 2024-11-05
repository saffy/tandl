import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from '../index.module.css';
import MembersAddForm from '@site/src/components/Form/MembersAddForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
    );
  }

  

  export default function MemberAddPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      
      <Layout
        title={`${siteConfig.title} Member Page`}
        description="The management page for members.">
        <HomepageHeader />
        <main>
          <MembersAddForm />
        </main>
      </Layout>
      </ThemeProvider>
    );
  }