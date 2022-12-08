import CodeOf from "../../components/CodeOf";
import ProjectLayout from "../../components/ProjectLayout";

export default function HerokuDeploy() {
  const title = "Create a Global Context with React";
  const styledTitle = `-CTX-`;
  const desc =
    "How to create a global context app using createContext useContext useReducer with React";
  const date = "08 Dec 2022";

  return (
    <ProjectLayout
      title={title}
      desc={desc}
      styledTitle={styledTitle}
      date={date}
      link="https://github.com/PaoloCatalano/miustationstore"
    >
      <div className="limit"></div>
      <p>
        At root of your application, create a <i>store</i> folder and inside of
        it create three files.
      </p>
      <fieldset>
        <legend>store</legend>
        <ul>
          <li>actions.js</li>
          <li>globalState.jsx</li>
          <li>reducers.js</li>
        </ul>
      </fieldset>
      <p>
        In order to create a global <acronym title="context">CTX</acronym> in
        React, I'm gonna use <i>createContext</i>, <i>useContext</i> and{" "}
        <i>useReducer</i> inside the <i>globalState.jsx</i> file.
      </p>
      <CodeOf type="jsx">{`import { useReducer, useContext, createContext } from "react";
import reducers from "./reducers";
import { ACTIONS } from "./actions";

const AppContext = createContext();

//initial state of the application
const initialState = {
  open: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  //dispatch all actions
  function isMenuOpen(isOpen) {
    dispatch({
      type: ACTIONS.OPEN_MENU,
      payload: isOpen,
    });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        isMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useCtx = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useCtx };

`}</CodeOf>
      <p>
        Inside <i>actions.js</i> I declare all the possible actions.
      </p>

      <CodeOf type="js">{`export const ACTIONS = {
  OPEN_MENU: "open_menu",
};
`}</CodeOf>
      <p>
        And finally, inside <i>reducers.js</i> the relationship between actions
        and the change of state
      </p>
      <CodeOf type="js">{`import { ACTIONS } from "./actions";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_MENU:
      return {
        ...state,
        open: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
`}</CodeOf>
      <div className="limit"></div>
      <div className="main__description">
        How to use and consume data from the Context
      </div>
      <p>
        To let the application share all the data, wrap the context at the base
        of your app.
      </p>
      <p>In my case, with Next.js:</p>
      <CodeOf type="tsx">{`import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "...store/globalState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />;
    </AppProvider>
  );
}

export default MyApp;
`}</CodeOf>
      <p>To consume the data, anywhere in your App, add this code</p>
      <CodeOf type="jsx">{`
import { useCtx } from "...store/globalState";

export default function Component() {
  const { open, isMenuOpen } = useCtx();
  
  return (...)
}
`}</CodeOf>
    </ProjectLayout>
  );
}
