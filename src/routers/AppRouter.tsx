import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Nav, List, ListItem, Link, Wrapper, Main, MainBody } from "./styled";
import MainHeader from "src/views/Header";
import Goals from "src/views/Goals";
import AddGoalForm from "src/views/AddGoal";
import Auth from "src/views/Auth";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import generalActions from "src/redux/modules/general/generalActions";
import userActions from "src/redux/modules/user/userActions";
import { useDispatch, useSelector } from "react-redux";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AppRouter() {
  const dispatch = useDispatch();
  const alertOpen = useSelector((state: any) => state.general.alertOpen);
  const user = useSelector((state: any) => state.user);
  if (!Object.keys(user).length) dispatch(userActions.getProfile());
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(generalActions.closeAlert());
  };
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/">
            <Nav>
              <List>
                <ListItem>
                  <Link to="/goals">Goals</Link>
                </ListItem>
              </List>
            </Nav>
          </Route>
        </Switch>
        <Main>
          <Switch>
            <Route path="/" exact></Route>
            <Route path="/">
              <MainHeader />
            </Route>
          </Switch>
          <MainBody>
            <Switch>
              <Route path="/goals">
                <Goals />
              </Route>
              <Route path="/add_goal">
                <AddGoalForm />
              </Route>
              <Route path="/" exact>
                <Auth />
              </Route>
            </Switch>
          </MainBody>
        </Main>
        <Snackbar
          open={alertOpen}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            Success!
          </Alert>
        </Snackbar>
      </Wrapper>
    </Router>
  );
}
const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps)(AppRouter);
