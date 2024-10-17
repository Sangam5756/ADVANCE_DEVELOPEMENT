# first we started by declaring two headers

- when we doing it we are not wrappend inside div so it throwing error
- react say when you return jsx means html you must return that with parent div or fragment
- we done that and render two headers

# then we were passing title props to header components

- so header is taking that props and rendering it on browser
- ok now i suddenly decided to change the title of one of the header so

  - i made one button and added event handler onClick when i click on that title should change
  - for that i just randomly calculating any value and giving to header component for the demonstration
  - after that i go to my browser and chech how the rerender is worked using react-dev-tool using animation
  - i realized that when i clicking the updatetitle button it triggering whole reconcilation cycle and all component
    rendering,
  - so we only want to re-render the component those who is changed.

  ### Question how to stop unnecssary re-render

  #### 1 push state down

  - so the answer for that push the state down to that component.
  - we can push up only down
  - state variable try to put at loweset common ancestors

- i declare another headerwithbutton and imported inside the app when i click on updatetitle it update the title

#### 2 - using MEMO

- when we wrap the component inside the memo then it change only thing which is change/updated
- the memo memorize the state

### useEffect() =>

- this will execute once when the component renders.
- also when the something changes inside dependency array mean some condition we given inside the dependancy array changes
  - dependency have state variable inside of it.
- empty array only once
-


