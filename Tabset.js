/** @jsx React.DOM */

define(['react','jquery'],function(React,$){

    var TabButton = React.createClass({
        onTabClick : function(event) {
            this.props.tabSet.activatePage( this.props.key );
        },

        render : function() {
            if ( this.props.state.active ) {
                return ( <span className={this.props.className} onClick={this.onTabClick}> {this.props.state.title} </span> );
            } else {
                return ( <span className={this.props.className} onClick={this.onTabClick}> {this.props.state.title} </span> );
            }
        }
    });

    var Tabset = React.createClass({

        activatePage : function( page ) {

            // Do a simple linear search to find the page in our list of tabs, and activate it.
            // In the same process, deactivate all the other tabs.
            var nextProps = this.props;
            $.each(nextProps.state.tabs,function(key,entry) {
                entry.active = ( page === key );
            });

            this.setState(nextProps);
        },

        render : function() {

            var Page = null;
            var Self = this;

            var Tabs = $.map(this.props.state.tabs, function(entry,key){
                var tabClass = Self.props.state.classes.inactive;

                if ( entry.active ) {
                    tabClass = Self.props.state.classes.active;
                    if ( entry.page != undefined ) {
                        Page = entry.page;
                    }
                }

                result = ( <TabButton key={key} className={tabClass} state={entry} tabSet={Self}/> );
                return result;
            });

            var result = ( <div> {Tabs} {Page} </div> );
            return result;
        }

    });

    return Tabset;

});

console.log( "https://github.com/earlye/react-widget-tabset initialized." );
