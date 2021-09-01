import * as React from "react";
import {shallow,configure} from "enzyme"
// import Adapter from "enzyme-adapter-reac";
import {act} from 'react-dom/test-utils';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../client/Component/app";
configure({ adapter: new Adapter() });
// describe('App', function () {
//    it('should display ', function () {
//        let container = document.createElement('div');
//        document.body.appendChild(container);
//        act(() => {
//            ReactDOM.render(<App />, container);
//        })
//        const header = container.querySelector('h1');
//        expect(header.textContent).toBe("Hello world React!")
//    });
// });

it("renders without crashing", () => {
    shallow(<App />);
  });
  
  it("renders Account header", () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Display Active Users Account Details</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });