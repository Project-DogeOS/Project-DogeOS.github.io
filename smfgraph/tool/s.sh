#set -x trace

svcs=`svcs -a | awk '{ if (NR != 1) { print $NF; } }' | grep -v "^lrc"`

for svc in $svcs
do
  echo ${svc/:default/}
  deps=`svcs -d ${svc/:default/} | awk '{ if (NR != 1) { print $NF; } }' | grep -v "^lrc"`
  for dep in $deps
  do
    echo "-< " ${dep/:default/}
  done
done
