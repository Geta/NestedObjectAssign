import isObject from './isObject';

export default function nestedObjectAssign(target, ...sources){
    if (!sources.length)
        return target;

    const source = sources.shift();

    if (isObject(target) && isObject(source)){
        for (const key in source){
            if (isObject(source[key])){
                if (!target[key])
                    Object.assign(target, {[key]: {}});

                nestedObjectAssign(target[key], source[key]);
            }
            else {
                Object.assign(target, {[key]: source[key]});
            }
        }
    }

    return nestedObjectAssign(target, ...sources);
}