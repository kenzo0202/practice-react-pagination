import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import pagination from 'pagination';

export default class BootstrapPaginator extends Component {

  render() {
    const { prelink, pager } = this.props;
    const current = pager.currentPpage || 1;
    const rowsPerPage = pager.rowsPerPage || 10;
    const totalResult = pager.totalResults || 0;

    const reactTemplate = new pagination.TemplatePaginator({
      prelink: prelink,
      current: current,
      rowsPerPage: rowsPerPage,
      totalResult: totalResult,
      template: function(result) {
        const elements = [];
        const prelink = result.prelink;
        let _key = 0;
        if (result.pageCount < 2) {
          return [];
        }
        if (result.previous) {
          const previous = (
            <li key={_key++}><Link to={prelink} query={{page: result.previous}}>{this.options.translator('PREVIOUS')}</Link></li>
          );
          elements.push(previous);
        }
        if (result.range.length) {
          let i, len;
          for ( i = 0, len = result.range.length; i < len; i++) {
            if (result.range[i] === result.current) {
              const active = (
                <li key={_key++} className="active"><Link to={prelink} query={{page: result.range[i]}}>{result.range[i]}</Link></li>
              );
              elements.push(active);
            }
            else {
              const list = (
                <li key={_key++}><Link to={prelink} query={{page: result.range[i]}}>{result.range[i]}</Link></li>
              );
              elements.push(list);
            }
          }
        }
        if (result.next) {
          const next = (
            <li key={_key++}><Link to={prelink} query={{page: result.next}}>{this.options.translator('NEXT')}</Link></li>
          );
          elements.push(next);
        }
        return elements;
      }
    });

    const elements = reactTemplate.render();

    return (
      <ul className="pagination">
        {elements}
      </ul>
    )
  }
}

// export default connect(mapStateToProps)(BootstrapPaginator)

// const BootstrapPaginator =  React.createClass({
//   getInitialState: function() {
//     return {
//       prelink: '/categories',
//       slashSeparator: false
//     }
//   },
//   render() {
//     const prelink = this.state.prelink;
//     const slashSeparator = this.state.slashSeparator;
//
//     const { pager } = this.props;
//     const current = pager.current_page || 1;
//     const rowsPerPage = pager.rows_per_page || 10;
//     const totalResult = pager.total_results || 0;
//
//     const reactTemplate = new pagination.TemplatePaginator({
//       prelink: prelink,
//       current: current,
//       rowsPerPage: rowsPerPage,
//       totalResult: totalResult,
//       slashSeparator: slashSeparator,
//       template: function(result) {
//         const elements = [];
//         const prelink = result.prelink;
//         let _key = 0;
//         if (result.pageCount < 2) {
//           return [];
//         }
//         if (result.previous) {
//           const previous = (
//             <li key={_key++}><Link to={prelink} query={{page: result.previous}}>{this.options.translator('PREVIOUS')}</Link></li>
//           );
//           elements.push(previous);
//         }
//         if (result.range.length) {
//           let i, len;
//           for ( i = 0, len = result.range.length; i < len; i++) {
//             if (result.range[i] === result.current) {
//               const active = (
//                 <li key={_key++} className="active"><Link to={prelink} query={{page: result.range[i]}}>{result.range[i]}</Link></li>
//               );
//               elements.push(active);
//             }
//             else {
//               const list = (
//                 <li key={_key++}><Link to={prelink} query={{page: result.range[i]}}>{result.range[i]}</Link></li>
//               );
//               elements.push(list);
//             }
//           }
//         }
//         if (result.next) {
//           const next = (
//             <li key={_key++}><Link to={prelink} query={{page: result.next}}>{this.options.translator('NEXT')}</Link></li>
//           );
//           elements.push(next);
//         }
//         return elements;
//       }
//     });
//
//     const elements = reactTemplate.render();
//
//     return (
//       <ul className="pagination">
//         {elements}
//       </ul>
//     )
//   }
// });
//
// module.exports = { BootstrapPaginator };
