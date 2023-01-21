import React from 'react';

import ErrorFallbackUI from './ErrorFallbackUI';

interface State {
  childError: Error | null;
}

interface OwnProps {
  children: React.ReactChild;
}

type Props = OwnProps;

class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    childError: null,
  };

  componentDidCatch(error: Error, info: any) {
    this.setState({childError: error});
  }

  render() {
    const {childError} = this.state;
    if (childError) {
      return <ErrorFallbackUI />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
