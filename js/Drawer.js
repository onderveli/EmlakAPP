/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Login from "./components/login/";
import Header from "./components/Header/";
import Pages from "./components/pages/";
import Detail from "./components/detail/";


import About from "./components/about/";
import PSupport from "./components/problemSupport/";
import CSupport from "./components/contactSupport/";
import HSupport from "./components/helpSupport/";

import Footer from "./components/footer/";
import NHBadge from "./components/badge/";
import NHButton from "./components/button/";
import NHCard from "./components/card/";
import NHCheckbox from "./components/checkbox/";
import NHDeckSwiper from "./components/deckswiper/";
import NHFab from "./components/fab/";
import NHForm from "./components/form/";
import TextArea from "./components/form/textArea";
import NHIcon from "./components/icon/";
import ListSwipe from "./components/listSwipe/";
import BasicIcon from "./components/icon/basic";
import IconState from "./components/icon/state";
import SpecificIcon from "./components/icon/specific";
import NHInputGroup from "./components/inputgroup/";
import NHLayout from "./components/layout/";
import NHList from "./components/list/";
import NHRadio from "./components/radio/";
import NHSearchbar from "./components/searchbar/";
import NHSpinner from "./components/spinner/";
import NHPicker from "./components/picker/";
import NHTab from "./components/tab/";
import NHThumbnail from "./components/thumbnail/";
import NHTypography from "./components/typography/";
import SplashPage from "./components/splashscreen/";
import SideBar from "./components/sidebar";
import Segment from "./components/segment";
import Toast from "./components/toast";
import Actionsheet from "./components/actionsheet";

const DrawerExample = DrawerNavigator(
  {
    Login: { screen: Login },
    Pages: { screen: Pages },

    About: { screen: About },
    CSupport: { screen: CSupport },
    HSupport: { screen: HSupport },
    PSupport: { screen: PSupport },

    Detail: { screen: Detail },
    Header: { screen: Header },
    Footer: { screen: Footer },
    NHBadge: { screen: NHBadge },
    NHButton: { screen: NHButton },
    NHCard: { screen: NHCard },
    NHCheckbox: { screen: NHCheckbox },
    NHDeckSwiper: { screen: NHDeckSwiper },
    NHFab: { screen: NHFab },
    NHForm: { screen: NHForm },
    TextArea: { screen: TextArea },
    NHIcon: { screen: NHIcon },
    BasicIcon: { screen: BasicIcon },
    IconState: { screen: IconState },
    SpecificIcon: { screen: SpecificIcon },
    NHInputGroup: { screen: NHInputGroup },
    NHLayout: { screen: NHLayout },
    NHList: { screen: NHList },
    ListSwipe: { screen: ListSwipe },
    NHRadio: { screen: NHRadio },
    NHSearchbar: { screen: NHSearchbar },
    NHSpinner: { screen: NHSpinner },
    NHPicker: { screen: NHPicker },
    NHTab: { screen: NHTab },
    NHThumbnail: { screen: NHThumbnail },
    NHTypography: { screen: NHTypography },
    Segment: { screen: Segment },
    Toast: { screen: Toast },
    Actionsheet: { screen: Actionsheet }
  },
  {
    initialRouteName: "Pages",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;
