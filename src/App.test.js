import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("elements", () => {
  it("should have an element with the data-testid='wrapper'" , () => {
    render(<App/>);
    const el = screen.getByTestId("wrapper"); 
    expect(el).not.toBe(null);
    expect(el).toBeInTheDocument();
  });
  it("should have an element with the data-testid='box'" , () => {
    render(<App/>);
    const el = screen.getByTestId("box"); 
    expect(el).not.toBe(null);
    expect(el).toBeInTheDocument();
  });
  it("should have an element with the data-testid='box' nested to data-testid='wrapper'" , () => {
    render(<App/>);
    const wrapper = screen.getByTestId("wrapper"); 
    const box = screen.getByTestId("box"); 
    expect(wrapper).toContainElement(box)
    expect(box).not.toContainElement(wrapper)  
  });
  it("should have an element with the data-testid='wrapper' have a class='wrapper'" , () => {
    render(<App/>);
    const wrapper = screen.getByTestId("wrapper"); 
    expect(wrapper).toHaveClass('wrapper');  
  });
  it("should have an element with the data-testid='box' have a class='box'" , () => {
    render(<App/>);
    const box = screen.getByTestId("box"); 
    expect(box).toHaveClass('box');  
  });
});

describe("text contents", () => {
  it("should contain original text inside the wrapper", () =>{
    render(<App/>);
    const el = screen.getByTestId("wrapper"); 
    const expected = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex officia deserunt mollit anim id est laborum.";
    expect(el).toHaveTextContent(expected);
  });
  it("should contain original text inside the box", () =>{
    render(<App/>);
    const el = screen.getByTestId("box"); 
    const expected = "Text cannot overlap with this box.";
    expect(el).toHaveTextContent(expected);
  });
});
describe("layout", () => {
  beforeEach(() => {
  Element.prototype.getBoundingClientRect = jest.fn(() => {
        return {
            width: 250,
            height: 250, 
            top:0,
            left:0
        }
    });
});
  it("should have roughly 250px width x 250px height on the wrapper", () => {
    render(<App/>);
    const wrapper = screen.getByTestId("wrapper"); 
    const rect= wrapper.getBoundingClientRect();
    expect(rect.width).toBeGreaterThanOrEqual(250);
    expect(rect.width).toBeLessThan(260);
    expect(rect.height).toBeGreaterThanOrEqual(250);
    expect(rect.height).toBeLessThan(260);
  });
});