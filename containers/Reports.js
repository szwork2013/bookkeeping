import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import FontIcon from 'material-ui/lib/font-icon';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import MonthlyChart from '../components/reports/MonthlyChart';
import MonthlyTable from '../components/reports/MonthlyTable';

import $ from 'jquery';

const Reports = React.createClass({

    componentDidMount: function() {
        ReactDom.render(<MonthlyChart />, document.getElementById('monthlyChart'));
    },

    changeTab: function(tab) {

        ReactDom.render(tab.props.component, document.getElementById(tab.props.children.props.id));
    },

    render: function() {
        return (
            <div>
                <Tabs>
                    <Tab
                        component={<MonthlyChart />}
                        onActive={this.changeTab}
                        icon={<FontIcon className="material-icons">timeline</FontIcon>}
                        label="Monthly Graph">
                        <div id="monthlyChart"></div>
                    </Tab>
                    <Tab
                        component={<MonthlyTable />}
                        onActive={this.changeTab}
                        icon={<FontIcon className="material-icons">dvr</FontIcon>}
                        label="Monthly Table">
                        <div id="monthlyTable"></div>
                    </Tab>
                </Tabs>

            </div>
        )
    }
});

export default Reports