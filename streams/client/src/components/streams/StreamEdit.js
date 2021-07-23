import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import StreamForm from "./StreamForm";
import { editStreams, fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  }

  onSubmit = (formValues) => {
    const id = this.props.match.params.id;
    this.props.editStreams(id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, "title", "description")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    stream: state.streams[id],
  };
};

export default connect(mapStateToProps, {
  editStreams,
  fetchStream,
})(StreamEdit);
