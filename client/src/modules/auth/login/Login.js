import React, { Component } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

const styles = {
  root: {
    marginTop: '5%'
  },
  button: {
    marginTop: '15px'
  }
}

class Login extends Component {
  render () {
    return (
      <Grid centered style={styles.root}>
        <Grid.Column width={6}>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </Form.Field>
          </Form>
          <Button type="submit" style={styles.button}>Sign Up</Button>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Login;
