import React from 'react';

type Props = {
  children: React.ReactNode;
  fallback: React.ReactNode;
};

export class ErrorBoundary extends React.Component {
  state: { hasError: boolean };
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
    this.props = props;
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log('error: ', error);
    console.log('info: ', info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
