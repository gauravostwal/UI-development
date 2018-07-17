import React from 'react';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { CurrentPersonInfo: this.props.CurrentPersonInfo, index: null, open: false };
    }

    viewthecontent = (e, index) => {
        const elem1 = document.getElementById('display-on');
        this.setState({ index, open: true });
        elem1.style.display = 'block';
        if (this.state.open === true) {
            this.setState({ open: false });
        } else {
            this.setState({ open: true });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.CurrentPersonInfo !== this.state.CurrentPersonInfo) {
            this.setState({ CurrentPersonInfo: nextProps.CurrentPersonInfo });
        }
    }

    render() {
        /*  console.log(this.state.CurrentPersonInfo) */
        return (
<div>
            {this.state.CurrentPersonInfo !== undefined ? this.state.CurrentPersonInfo.map((person, index) => (
                <div className="item-1" key={person.id}>

                    <img className="image-attack" src={person.avatar_url} alt="Circle image" />
                    <h3 className="text-center">
{person.login}
                    </h3>
                    <h6 className="text-center">
Profile:
{person.url}
                    </h6>
                    <h6 className="text-center">
Score:
{person.score}
                    </h6>
                    <button className="btn btn-primary" type="button" id="display-on" onClick={e => this.viewthecontent(e, index)}>
Details
                    </button>
                    {index === this.state.index && this.state.open === true

                        ? (
<div className="row" id="data-table">

                            <div className="col-md-12 col-lg-12 col-sm-12 table-down">
                                <table className="table table-border">
                                    <thead className="thead-dark table-border">
                                        <tr className="table-border">

                                            <th>
Repository Url
                                            </th>
                                            <th>
Profile Url
                                            </th>
                                            <th>
Score
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td>
{person.repos_url}
                                            </td>
                                            <td>
{person.type}
                                            </td>
                                            <td>
{person.score}
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>

</div>
)
                        : <h6 />
                    }
                </div>
            )) : (
<h1>
fdfd
</h1>
)}
</div>
);
    }
}
export default Grid;
