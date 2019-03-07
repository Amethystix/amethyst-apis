let activities = require('./activities').activities;
const moment = require('moment');

const def = {
  name: 'Who could know?',
  description: 'Probably doing something stupid',
  endTime: undefined
};

function getActivity(time) {
  const now = moment(new Date(time));
  const weekday = now.day();
  const day = now.date();

  activities = activities.filter((act) => {
    if (Array.isArray(act.time)) {
      act.time = act.time.filter((t) => {
        t.duration.hours = t.duration.hours || 0;
        t.duration.minutes = t.duration.minutes || 0;
        const startTime = moment({hour: t.start.hour, minute: t.start.minute});
        const endTime = moment({hour: t.start.hour, minute: t.start.minute})
          .add(t.duration.hours, 'hour').add(t.duration.minutes, 'minute');
        act.endTime = endTime;
        if (t.exact) {
          if (t.month === now.month && t.day === day) {
            return now < endTime && now >= startTime;
          }
        } else if (!t.days || t.days.includes(weekday)) {
            return now < endTime && now >= startTime;
        }
        return false;
      });
      if (act.time.length > 0) {
        return true;
      }
    } else {
      act.time.duration.hours = act.time.duration.hours || 0;
      act.time.duration.minutes = act.time.duration.minutes || 0;
      const startTime = moment({hour: act.time.start.hour, minute: act.time.start.minute});
      const endTime = moment({hour: act.time.start.hour, minute: act.time.start.minute})
        .add(act.time.duration.hours, 'hour').add(act.time.duration.minutes, 'minute');
      act.endTime = endTime;
      if (act.time.exact) {
        if (act.time.month === now.month && act.time.day === day) {
          return now < endTime && now >= startTime;
        }
      } else if (!act.time.days || act.time.days.includes(weekday)) {
        return now < endTime && now >= startTime;
      }
    }
  });

  const priorityActivities = activities.filter(act => act.override);

  if (priorityActivities.length > 0) {
    const current = priorityActivities[0];
    return {
      name: current.name,
      description: current.description,
      endsAt: current.endTime
    }
  } else {
    const current = activities[0] || def;
    return {
      name: current.name,
      description: current.description,
      endsAt: current.endTime
    };
  }
}

module.exports = getActivity;