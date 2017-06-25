import * as gulp from 'gulp';
import * as del from 'del';
import {webdriver_update, protractor} from 'gulp-protractor';
import * as plumber from 'gulp-plumber';
import * as notify from 'gulp-notify';
import * as changedInPlace from 'gulp-changed-in-place';
import * as sourcemaps from 'gulp-sourcemaps';
import * as ts from 'gulp-typescript';
import * as project from '../aurelia.json';
import {CLIOptions} from 'aurelia-cli';

function clean() {
  return del(project.e2eTestRunner.output + '*');
}

var typescriptCompiler = typescriptCompiler || null;

function build() {
  typescriptCompiler = ts.createProject('tsconfig.json', {
    module: 'CommonJS',
    typescript: require('typescript')
  });

  return gulp.src(project.e2eTestRunner.source)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changedInPlace({firstPass:true}))
    .pipe(sourcemaps.init())
    .pipe(typescriptCompiler())
    .pipe(gulp.dest(project.e2eTestRunner.output));
}

function run() {
  return gulp.src(project.e2eTestRunner.output + '**/*.js')
    .pipe(protractor({
      configFile: 'protractor.conf.js',
      args: ['--baseUrl', 'http://127.0.0.1:9000']
    }))
    .on('end', () => { process.exit(); })
    .on('error', e => { throw e; });
}

export default gulp.series(
  webdriver_update,
  clean,
  build,
  run
);
