react-widget-tabset
===================

A react-js tabset widget. In its parent, you can specify a series of page react widgets, and
during the Tabset's render method, only the currently active page widget will be rendered;
this means that the browser's DOM ought to be fairly lean - you won't have DOM built up
for hidden pages.

Here's a simple example:

```javascript

/** @jsx React.DOM */

define(['react','jsx!Tabset'], function(React,Tabset) {

    var Page1 = React.createClass({ render : function() {return (<div>Page 1</div>);} });

    var Page2 = React.createClass({ render : function() {return (<div>Page 2</div>);} });

    var Page3 = React.createClass({ render : function() {return (<div>Page 3</div>);} });

    var Page4 = React.createClass({ render : function() { return (<div>Page 4</div>);} });

    var TabsConfig =
            {
                tabs: [ { "key" : "profile" , "title" : "Profile" , "active" : true , "page" : Page1() },
                        { "key" : "learn"  , "title" : "Learn" , "page" : Page2() },
                        { "key" : "skills" , "title" : "Skills" , "page" : Page3() },
                        { "key" : "jobs"   , "title" : "Jobs" , "page" : Page4() } ]
            };

    React.renderComponent(
            <div> <Tabset state={TabsConfig} /> </div>
            , document.getElementById('content')

    );
});
```

This is still a work in progress. For example, tabs do not change CSS classes to reflect their
current state.  That's coming soon.
