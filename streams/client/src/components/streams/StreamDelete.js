import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";

import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  }

  onDelete = () => {
    const id = this.props.match.params.id;
    this.props.deleteStream(id);
  };

  onDismiss() {
    history.push("/");
  }

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui negative button" onClick={this.onDelete}>
          Delete
        </button>
        <button className="ui button" onClick={this.onDismiss}>
          Cancel
        </button>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete this stream with title: ${this.props.stream.title}?`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={this.onDismiss}
      />
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
  fetchStream,
  deleteStream,
})(StreamDelete);
