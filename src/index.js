/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {

    var firstPromise = new Promise(function(resolve, reject) {

        setTimeout(function () {
            resolve();
        }, 1000*seconds);
    });

    return firstPromise;
}

/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {
    let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

    var secondPromise = new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest(),
            obj,
            result = [];

        function compare(a, b) {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }

            return 0;
        }

        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.send();
        xhr.addEventListener('load', function() {
            obj = xhr.response;
            for (var i in obj ) {
                if (obj.hasOwnProperty(i)) {
                    result.push(obj[i]);
                }
            }
            result.sort(compare);

            resolve(result);
        });
    });

    return secondPromise;
}

export {
    delayPromise,
    loadAndSortTowns
};
