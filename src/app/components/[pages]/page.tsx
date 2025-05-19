type PageProps = {
  params: Promise<{
    pages: string;
  }>;
};
const Pages = async ({params}: PageProps) => {
  const {pages} = await params;
  return <div></div>;
};

export default Pages;
