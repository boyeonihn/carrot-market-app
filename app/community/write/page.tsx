import Button from '@/_components/button';
import Layout from '@/_components/layout';
import TextArea from '@/_components/textarea';

const Write = () => {
  return (
    <Layout canGoBack title="Write Post">
      <form className="p-4 space-y-4">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </Layout>
  );
};

export default Write;
