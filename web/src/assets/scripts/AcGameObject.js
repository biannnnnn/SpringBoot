const AC_GAME_OBJECTS = [];

export class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.thimdelta = 0;
        this.has_called_started = false;
    }

    start() {  // 只执行一次

    }

    update() {  // 除了第一帧执行一次，其余每一帧都执行一次
        
    }

    on_destroy() {  // 删除之前执行

    }

    destroy() {
        this.on_destroy( );

        for(let i in AC_GAME_OBJECTS) {
            const obj = AC_GAME_OBJECTS[i];
            if(obj == this) {
                AC_GAME_OBJECTS.slice(i);
                break;
            }
        }
    }
}

let last_timestamp; 
const step = timestamp => {
    for(let obj of AC_GAME_OBJECTS) {
        if(!obj.has_called_started) {
            obj.has_called_started = true;
            obj.start();
        } else {
            obj.thimdelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(step);
}
requestAnimationFrame(step);