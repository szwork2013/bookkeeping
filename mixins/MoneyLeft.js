import $ from 'jquery';

module.exports = {
    updateMoneyLeft: function() {
        $.ajax({
            url: '/money-left',
            type: 'GET',
            success: function(data) {
                this.setState({
                    moneyLeft: '10.2m'//moneyLeft
                });
            }.bind(this)
        });
    }
};