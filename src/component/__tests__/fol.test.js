import Fol from "../fol1/index";
import {render,screen,cleanup} from "@testing-library/react";

afterEach(()=>
{
    cleanup();
})
test("react component test",()=>{
    render(<Fol />);
    var constElement = screen.getByTestId("val1");
    expect(constElement).toHaveTextContent("hello");
    expect(constElement).toBeInTheDocument();
})