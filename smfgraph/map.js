var manifestMap = {
  // dogeos
  'svc:/system/dogeos': '<a target="_blank" href="https://github.com/Project-DogeOS/DogeOS/blob/master/overlay/lib/svc/manifest/system/dogeos-chunter.xml">dogeos-chunter.xml</a>',
  'svc:/milestone/sysconfig':'<a target="_blank" href="https://github.com/Project-DogeOS/DogeOS/blob/master/overlay/lib/svc/manifest/milestone/sysconfig.xml">sysconfig.xml</a>',
  // joyent
  'svc:/system/auditd': '<a target="_blank" href="https://github.com/joyent/smartos-live/tree/master/overlay/generic/lib/svc/manifest/system/auditd.xml">auditd.xml</a>',
  'svc:/system/console-login': '<a target="_blank" href="https://github.com/joyent/smartos-live/tree/master/overlay/generic/lib/svc/manifest/system/console-login.xml">console-login.xml</a>',
  'svc:/system/coreadm': '<a target="_blank" href="https://github.com/joyent/smartos-live/tree/master/overlay/generic/lib/svc/manifest/system/coreadm.xml">coreadm.xml</a>',
  'svc:/system/mdata': '<a target="_blank" href="https://github.com/joyent/smartos-live/tree/master/overlay/generic/lib/svc/manifest/system/mdata.xml">mdata.xml</a>',
  'svc:/system/smartdc-config': '<a target="_blank" href="https://github.com/joyent/smartos-live/tree/master/overlay/generic/lib/svc/manifest/system/smartdc-config.xml">smartdc-config.xml</a>',
  'svc:/system/sysidtool': '<a target="_blank" href="https://github.com/joyent/smartos-live/tree/master/overlay/generic/lib/svc/manifest/system/sysidtool.xml">sysidtool.xml</a>',
  'svc:/system/filesystem/minimal': '<a target="_blank" href="https://github.com/joyent/smartos-live/blob/master/overlay/generic/lib/svc/manifest/system/filesystem/minimal-fs.xml">minimal-fs.xml</a>',
  // illumose/Solaris
};
function getManifestUrl(name) {
  return manifestMap[name] || '[TODO]';
}

var methodMap = {
  // dogeos
  'svc:/system/dogeos': '<a target="_blank" href="https://github.com/Project-DogeOS/DogeOS/blob/master/overlay/dogeos/bin/chunter-init">chunter-init</a>',
  'svc:/milestone/sysconfig':'',
  // joyent
  'svc:/system/auditd': '/lib/svc/method/svc-auditd',
  'svc:/system/console-login': '<a target="_blank" href="https://github.com/joyent/smartos-live/blob/master/overlay/generic/lib/svc/method/console-login">console_login</a>',
  'svc:/system/coreadm': '',
  'svc:/system/mdata': '<a target="_blank" href="https://github.com/joyent/smartos-live/blob/master/overlay/generic/lib/svc/method/mdata-fetch">mdata-fetch</a><br>'+
                       '<a target="_blank" href="https://github.com/joyent/smartos-live/blob/master/overlay/generic/lib/svc/method/mdata-execute">mdata-execute</a>',
  'svc:/system/smartdc-config': '',
  'svc:/system/sysidtool': '',
  'svc:/system/filesystem/minimal': '',
  // illumose/Solaris
};
function getMethodUrl(name) {
  return methodMap[name] || '[TODO]';
}
