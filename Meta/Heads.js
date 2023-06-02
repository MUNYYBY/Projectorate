import React from "react";
import Head from "next/head";
import Script from "next/script";

export const Gtag = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9PDVV2KB77"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config','G-9PDVV2KB77');`}
      </Script>
    </>
  );
};

export const IndexHeadMeta = () => {
  return (
    <Head>
      <title>{`Projectorate - A software project management platform`}</title>
      <meta
        name="description"
        content={`Projectorate – Manage your projects efficiently and seamlessly & collaborate with your team members`}
      />
      <meta
        name="keywords"
        content="Project, Software Management, Management"
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
  );
};

export const LoginHeadMeta = () => {
  return (
    <Head>
      <title>{`Login - Projectorate - A software project management platform`}</title>
      <meta
        name="description"
        content={`Projectorate – Manage your projects efficiently and seamlessly & collaborate with your team members`}
      />
      <meta
        name="keywords"
        content="Project, Software Management, Management"
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
  );
};

export const DashboardHeadMeta = () => {
  return (
    <Head>
      <title>{`Dashboard - Projectorate - A software project management platform`}</title>
      <meta
        name="description"
        content={`Projectorate – Manage your projects efficiently and seamlessly & collaborate with your team members`}
      />
      <meta
        name="keywords"
        content="Project, Software Management, Management"
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
  );
};

export const ProjectHeadMeta = () => {
  return (
    <Head>
      <title>{`Projects Panel - Projectorate - A software project management platform`}</title>
      <meta
        name="description"
        content={`Projectorate – Manage your projects efficiently and seamlessly & collaborate with your team members`}
      />
      <meta
        name="keywords"
        content="Project, Software Management, Management"
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
  );
};

export const TeamsHeadMeta = () => {
  return (
    <Head>
      <title>{`Teams Panel - Projectorate - A software project management platform`}</title>
      <meta
        name="description"
        content={`Projectorate – Manage your projects efficiently and seamlessly & collaborate with your team members`}
      />
      <meta
        name="keywords"
        content="Project, Software Management, Management"
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
  );
};
export const LogsHeadMeta = () => {
  return (
    <Head>
      <title>{`Logs - Projectorate - A software project management platform`}</title>
      <meta
        name="description"
        content={`Projectorate – Manage your projects efficiently and seamlessly & collaborate with your team members`}
      />
      <meta
        name="keywords"
        content="Project, Software Management, Management"
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
  );
};

export const EmployeesHeadMeta = () => {
  return (
    <Head>
      <title>{`Employees - Projectorate - A software project management platform`}</title>
      <meta
        name="description"
        content={`Projectorate – Manage your projects efficiently and seamlessly & collaborate with your team members`}
      />
      <meta
        name="keywords"
        content="Project, Software Management, Management"
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
  );
};
export const BoardHeadMeta = () => {
  return (
    <Head>
      <title>{`Board - Projectorate - A software project management platform`}</title>
      <meta
        name="description"
        content={`Projectorate – Manage your projects efficiently and seamlessly & collaborate with your team members`}
      />
      <meta
        name="keywords"
        content="Project, Software Management, Management"
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
  );
};
