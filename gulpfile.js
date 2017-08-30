var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass'); //Подключаем Sass пакет
var browserSync = require('browser-sync'); // Подключаем Browser Sync
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');
var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: "30px", /* gutter width px || % */
    container: {
        maxWidth: '1440px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            'width': '1440px', /* -> @media (max-width: 1100px) */
            'fields': '30px' /* side fields */
        },
        md: {
            'width': '1025px',
            'fields': '15px'
        },
        sm: {
            'width': '780px',
            'fields': '15px'
        },
        xs: {
            'width': '320px',
            'fields': '15px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    }
};

gulp.task('create', function() {
    smartgrid('app/assets/scss/', settings);
    });

gulp.task('scss', function(){ // Создаем таск "sass"
    return gulp.src('app/assets/scss/style.scss') // Берем источник
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gcmq()) // группируем медиазапросы
        .pipe(gulp.dest('dist/assets/css')) // Выгружаем результата в папку app/css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'dist' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});



gulp.task('watch', ['browser-sync', 'scss'], function() {
    gulp.watch('app/assets/scss/*.scss', ['scss']); // Наблюдение за sass файлами
    gulp.watch('dist/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('dist/assets/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});


