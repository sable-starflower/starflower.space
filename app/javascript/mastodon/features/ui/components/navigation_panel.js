import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Icon from 'mastodon/components/icon';
import { profile_directory, showTrends } from 'mastodon/initial_state';
import NotificationsCounterIcon from './notifications_counter_icon';
import FollowRequestsNavLink from './follow_requests_nav_link';
import ListPanel from './list_panel';
import TrendsContainer from 'mastodon/features/getting_started/containers/trends_container';

const NavigationPanel = () => (
  <div className='navigation-panel'>
    <NavLink className='column-link column-link--transparent' to='/timelines/home' data-preview-title-id='column.home' data-preview-icon='home' ><Icon className='column-link__icon' id='home' fixedWidth /><FormattedMessage id='tabs_bar.home' defaultMessage='Home' /></NavLink>
    <NavLink className='column-link column-link--transparent' to='/notifications' data-preview-title-id='column.notifications' data-preview-icon='bell' ><NotificationsCounterIcon className='column-link__icon' /><FormattedMessage id='tabs_bar.notifications' defaultMessage='Notifications' /></NavLink>
    <FollowRequestsNavLink />
    <NavLink className='column-link column-link--transparent' to='/timelines/public/local' data-preview-title-id='column.community' data-preview-icon='users' ><Icon className='column-link__icon' id='users' fixedWidth /><FormattedMessage id='tabs_bar.local_timeline' defaultMessage='Local' /></NavLink>
    <NavLink className='column-link column-link--transparent' to='/timelines/direct'><Icon className='column-link__icon' id='envelope' fixedWidth /><FormattedMessage id='navigation_bar.direct' defaultMessage='Direct messages' /></NavLink>
    <NavLink className='column-link column-link--transparent' to='/favourites'><Icon className='column-link__icon' id='star' fixedWidth /><FormattedMessage id='navigation_bar.favourites' defaultMessage='Favourites' /></NavLink>
    <NavLink className='column-link column-link--transparent' to='/bookmarks'><Icon className='column-link__icon' id='bookmark' fixedWidth /><FormattedMessage id='navigation_bar.bookmarks' defaultMessage='Bookmarks' /></NavLink>

    <ListPanel />

    <hr />

    <a className='column-link column-link--transparent' href='/settings/preferences'><Icon className='column-link__icon' id='cog' fixedWidth /><FormattedMessage id='navigation_bar.preferences' defaultMessage='Preferences' /></a>
    <a className='column-link column-link--transparent' href='/relationships'><Icon className='column-link__icon' id='users' fixedWidth /><FormattedMessage id='navigation_bar.follows_and_followers' defaultMessage='Follows and followers' /></a>

    {showTrends && <div className='flex-spacer' />}
    {showTrends && <TrendsContainer />}
  </div>
);

export default withRouter(NavigationPanel);
