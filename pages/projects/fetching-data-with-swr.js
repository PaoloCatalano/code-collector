import CodeOf from "../../components/CodeOf";
import ProjectLayout from "../../components/ProjectLayout";

export default function HerokuDeploy() {
  const title = "Fetching data with SWR";
  const styledTitle = `-SWR-`;
  const desc =
    "How to organize the application using SWR, to fetch data which change often and update content constantly and automatically";
  const date = "24 Jul 2022";

  return (
    <ProjectLayout
      title={title}
      desc={desc}
      styledTitle={styledTitle}
      date={date}
      link="https://github.com/PaoloCatalano/miu-shop"
    >
      <div className="limit"></div>
      <p>
        To use <acronym title="stale while revalidate">SWR</acronym> first you
        need to install dependencies
      </p>
      <CodeOf type="cmd">{`npm install swr
`}</CodeOf>
      <p>
        You can use it to fetch data inside a component with few simple and
        short lines of code, but if you have some reusable default options, it
        is better to use a <i>Global Configuration</i>, like in this example
        below.
      </p>
      <p>
        At the top level of you app, which in my case is the <i>_app.js</i> file
        of a NextJS project
      </p>
      <CodeOf type="jsx">{`import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        // fetcher: async (url) => {
        //   const res = await fetch(url);
        //   return await res.json();
        // },

        fetcher: (url) => fetch(url).then((r) => r.json()),
        refreshInterval: 5000, //(default = 0)

        // dedupingInterval: 4000, (default = 2000)
      }}
    >
          <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
`}</CodeOf>
      <div className="more-links">
        <div></div>
        <a
          href="https://github.com/PaoloCatalano/miu-shop/blob/main/pages/_app.js
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to example _app.js
        </a>
        <div></div>
      </div>
      <p>
        Create a file in <i>utils</i> and call it <i>swr.js</i> in which you
        will collect hooks and functions you need in your project
      </p>
      <CodeOf type="js">
        {`
import useSWR from "swr";

export function useProduct(id) {
  const { data, error } = useSWR(id ? \`/api/product/\${id}\` : null);

  return {
    prodSWR: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useUser(token) {
    ...
}
`}
      </CodeOf>
      <div className="more-links">
        <div></div>
        <a
          href="https://github.com/PaoloCatalano/miu-shop/blob/main/utils/swr.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to example utils/swr.js
        </a>
        <div></div>
      </div>

      <p>
        Finally, use the <i>useProduct</i> hooks in the component
      </p>
      <CodeOf type="jsx">{`
import { useProduct } from "../../utils/swr";

const ProductItem = ({ product /* fetch the product props from a top level or from a page */ }) => {

  const { prodSWR, isLoading, isError } = useProduct(product._id);

  
  return (
      <article>
        <h1>
          {product.title}
        </h1>

          {prodSWR ? (

// if SWR already fetched and not null

            prodSWR.product?.inStock > 0 ? (
              <h6 className="text-info-bold">
                In Stock: {prodSWR.product.inStock}
              </h6>
            ) : (
              <h6 className="text-danger">Out of Stock</h6>
            )
          ) : (

// if SWR did NOT fetched or null

            <h6 className="text-danger">
              <span>{isLoading && "⌛"}</span>
              {isError && \`not up-to-date stock: \${product.inStock}\`}
            </h6>

          )}
        </article>

  );
};

export default ProductItem;
`}</CodeOf>
      <div className="more-links">
        <div></div>
        <a
          href="https://github.com/PaoloCatalano/miu-shop/blob/main/components/product/ProductItem.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to example ProductItem.js
        </a>
        <div></div>
      </div>

      <p>
        Now, every 5 seconds, the browser will show the up-to-date stock number
        of items of that specific product, without refreshing the page!
      </p>

      <div className="more-links">
        <div></div>
        <a
          className="link"
          href="https://swr.vercel.app/docs/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official SWR docs
        </a>
        <div></div>
      </div>
    </ProjectLayout>
  );
}
