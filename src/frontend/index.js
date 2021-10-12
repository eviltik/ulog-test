import ulog from 'ulog';
import anylogger from 'anylogger';

const log = anylogger('my app');

localStorage.setItem( 'log', 'info' );

// This fail
log.info('immediate');

setTimeout(() => {
    // This is ok
    log.info('delayed 1sec');
}, 1000);


