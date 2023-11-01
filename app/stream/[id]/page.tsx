import Layout from '@/_components/layout';

const StreamDetail = () => {
  return (
    <Layout canGoBack>
      <main className="py-10 space-y-4 px-4">
        <div className="pt-4 px-4">
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video"></div>
          <h3 className="text-gray-800 font-semibold text-2xl mt-2">
            Let's Try potatoes
          </h3>
        </div>
        <div className="py-10 pb-16 px-8 h-[50vh] overflow-y-scroll space-y-4">
          <section className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-800" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
              <p>Hi how much are you selling them for?</p>
            </div>
          </section>
          <section className="flex flex-row-reverse space-x-reverse items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-800" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
              <p>I want ￦20,000</p>
            </div>
          </section>
          <section className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-800" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
              <p>Hi how much are you selling them for?</p>
            </div>
          </section>
          <section className="flex flex-row-reverse space-x-reverse items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-800" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
              <p>I want ￦20,000</p>
            </div>
          </section>
          <section className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-800" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
              <p>Hi how much are you selling them for?</p>
            </div>
          </section>
          <section className="flex flex-row-reverse space-x-reverse items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-800" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
              <p>I want ￦20,000</p>
            </div>
          </section>
          <section className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-800" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
              <p>Hi how much are you selling them for?</p>
            </div>
          </section>
          <section className="flex flex-row-reverse space-x-reverse items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-800" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
              <p>I want ￦20,000</p>
            </div>
          </section>
          <section className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-800" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
              <p>Hi how much are you selling them for?</p>
            </div>
          </section>
          <section className="flex flex-row-reverse space-x-reverse items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-800" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
              <p>I want ￦20,000</p>
            </div>
          </section>
          <section className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-800" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
              <p>Hi how much are you selling them for?</p>
            </div>
          </section>
          <section className="flex flex-row-reverse space-x-reverse items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-800" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
              <p>I want ￦20,000</p>
            </div>
          </section>
        </div>
        <section className="fixed w-full mx-auto max-w-md bottom-4 inset-x-0">
          <div className="flex relative items-center">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 pr-12"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 text-sm text-white font-medium hover:bg-600">
                &rarr;
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default StreamDetail;
