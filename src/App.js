import "./app.css"
import Scroll from "./component/Scroll/scroll";
import Header from "./container/header/header"
import Page1 from "./container/pages/Page1/page1";
import Page2 from "./container/pages/Page2/page2";
import Page3 from "./container/pages/Page3/page3";
import Page4 from "./container/pages/Page4/page4";
import Page5 from "./container/pages/Page5/page5";


function App() {
  return (
    <div className="main">
{/*       <Scroll/>
 */}  <Header/>      
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
    </div>
  );
}

export default App;
