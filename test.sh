#!/bin/bash -e
cd "$(dirname "$0")"

echo "Building estrella in debug mode"
./build.js -g

cd examples

for d in *; do
  if [ -d "$d" ] && [[ "$d" != "."* ]]; then
    echo "-----------------------------------------------------"
    echo ">>> examples/$d"
    pushd "$d" >/dev/null

    # link local debug version of estrella into node_modules
    mkdir -p node_modules
    rm -rf node_modules/estrella
    pushd node_modules >/dev/null
    ln -s ../../../dist/estrella.g.js estrella
    popd >/dev/null

    # build example, assuming ./out is the product output directory
    rm -rf out
    ./build.js

    for f in out/*.js; do
      node "$f"
      break
    done

    # # extract outfile from build script
    # outfile=$(node -p 'const m = /\boutfile:\s*("[^"]+"|'"'"'[^\'"'"']+\'"'"')/.exec(require("fs").readFileSync("build.js", "utf8")) ; (m ? JSON.parse(m[1] || m[1]) : "")')
    # if [ "$outfile" != "" ]; then
    #   node "$outfile"
    # else
    #   echo "Can not find outfile for example $PWD" >&2
    # fi

    popd >/dev/null
  fi
done
