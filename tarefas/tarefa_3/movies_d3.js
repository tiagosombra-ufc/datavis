function renderWorldwide(data, comparator) {
    d3.select("#area").selectAll("div.h-bar")
        .data(data)
        .enter().append("div")
        .attr("class", "h-bar")
        .append("span");

    d3.select("#area").selectAll("div.h-bar")
        .data(data)
        .exit().remove();

    d3.select("#area").selectAll("div.h-bar")
        .data(data)
        .attr("class", "h-bar")
        .style("background-color", "#225ea8")
        .style("width", function (d) {
            return (d.Worldwide_Gross_M / 5) + "px";
        })
        .select("span")
        .style("width", function (d) {
            return 300 + "px";
        })
        .style("color", "black")
        .style("display", "block")
        .style("text-align", "left")
        .style("margin-left", function (d) {
            return (d.Worldwide_Gross_M / 5 + 5) + "px";
        })
        .html(function (d) {
            return "" + d.Film + "";
        });
    if (comparator)
        d3.select("#area").selectAll("div.h-bar")
            .sort(comparator);
}

function renderBudget(data, comparator) {
    d3.select("#area1").selectAll("div.h-bar")
        .data(data)
        .enter().append("div")
        .attr("class", "h-bar")
        .append("span");

    d3.select("#area1").selectAll("div.h-bar")
        .data(data)
        .exit().remove();

    d3.select("#area1").selectAll("div.h-bar")
        .data(data)
        .attr("class", "h-bar")
        .style("background-color", "#a1dab4")
        .style("width", function (d) {
            return (d.Budget_M / 5) + "px";
        })
        .select("span")
        .style("width", function (d) {
            return 300 + "px";
        })
        .style("color", "black")
        .style("display", "block")
        .style("text-align", "left")
        .style("margin-left", function (d) {
            return ((d.Budget_M) / 5 + 5) + "px";
        })
        .html(function (d) {
            return "" + d.Film + "";
        });
    if (comparator)
        d3.select("#area1").selectAll("div.h-bar")
            .sort(comparator);
}

function renderProfit(data, comparator) {
    d3.select("#area2").selectAll("div.h-bar")
        .data(data)
        .enter().append("div")
        .attr("class", "h-bar")
        .append("span");

    d3.select("#area2").selectAll("div.h-bar")
        .data(data)
        .exit().remove();

    d3.select("#area2").selectAll("div.h-bar")
        .data(data)
        .attr("class", "h-bar")
        .style("background-color", "#beaed4")
        .style("width", function (d) {
            return ((d.Worldwide_Gross_M - d.Budget_M) / 5) + "px";
        })
        .select("span")
        .style("width", function (d) {
            return 300 + "px";
        })
        .style("color", "black")
        .style("display", "block")
        .style("text-align", "left")
        .style("margin-left", function (d) {
            return ((d.Worldwide_Gross_M - d.Budget_M) / 5 + 5) + "px";
        })
        .html(function (d) {
            return "" + d.Film + "";
        });
    if (comparator)
        d3.select("#area2").selectAll("div.h-bar")
            .sort(comparator);
}

var sortbyBudgetDown = function (a, b) { //do menor para o maior
    return a.Budget_M < b.Budget_M ? -1 : 1;
};

var sortbyBudgetUp = function (a, b) { //do maior para o menor
    return a.Budget_M > b.Budget_M ? -1 : 1;
};

var sortbyProfitDown = function (a, b) { //do menor para o maior
    return (a.Worldwide_Gross_M - a.Budget_M) < (b.Worldwide_Gross_M - b.Budget_M) ? -1 : 1;
};

var sortbyProfitUp = function (a, b) { //do maior para o menor
    return (a.Worldwide_Gross_M - a.Budget_M) > (b.Worldwide_Gross_M - b.Budget_M) ? -1 : 1;
};

var sortbyWorldwideDown = function (a, b) { //do menor para o maior
    return a.Worldwide_Gross_M < b.Worldwide_Gross_M ? -1 : 1;
};

var sortbyWorldwideUp = function (a, b) { //do maior para o menor
    return a.Worldwide_Gross_M > b.Worldwide_Gross_M ? -1 : 1;
};

d3.json("movies.json", function (error, json) {
    renderWorldwide(json, sortbyWorldwideUp);
    renderBudget(json, sortbyBudgetUp);
    renderProfit(json, sortbyProfitUp);
});