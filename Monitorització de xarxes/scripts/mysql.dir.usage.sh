#!/bin/bash
df -h /var/lib/mysql | awk 'NR==2 {gsub("%","",$5); print $5}'
