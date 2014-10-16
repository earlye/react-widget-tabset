/** @jsx React.DOM */

define(['react'],function(React){

    var TabButton = React.createClass({
        onTabClick : function(event) {
            this.props.tabSet.activatePage( this.props.state );
        },

        render : function() {
            if ( this.props.state.active ) {
                return ( <span onClick={this.onTabClick}> {this.props.state.title} </span> );
            } else {
                return ( <span onClick={this.onTabClick}> {this.props.state.title} </span> );
            }
        }
    });

    var Tabset = React.createClass({

        activatePage : function( page ) {

            // Do a simple linear search to find the page in our list of tabs, and activate it.
            // In the same process, deactivate all the other tabs.
            var nextProps = this.props;
            nextProps.state.tabs.map(function(entry) {
                entry.active = ( page === entry );
            });

            this.setState(nextProps);
        },

        render : function() {

            var Page = null;
            var Self = this;

            var Tabs = this.props.state.tabs.map(function(entry){
                if ( entry.active ) {
                    if ( entry.page != undefined ) {
                        Page = entry.page;
                    }
                }
                result = ( <TabButton state={entry} tabSet={Self}/> );
                return result;
            });

            var result = ( <div> {Tabs} {Page} </div> );
            return result;
        }

    });

    return Tabset;

});

console.log( "https://github.com/earlye/react-widget-tabset initialized." );
