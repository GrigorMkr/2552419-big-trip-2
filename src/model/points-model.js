import { mockPoints } from '../mock/points.js';

export default class PointsModel {
  #points = [];

  constructor() {
    this.#points = [...mockPoints];
  }

  getPoints() {
    return this.#points;
  }

  deletePoint(pointId) {
    this.#points = this.#points.filter(point => point.id !== pointId);
    return this.#points;
  }

  updatePoint(updatedPoint) {
    const index = this.#points.findIndex(point => point.id === updatedPoint.id);
    if (index !== -1) {
      this.#points[index] = { ...this.#points[index], ...updatedPoint };
    }
    return this.#points;
  }

  addPoint(newPoint) {
    this.#points.push(newPoint);
    return this.#points;
  }
}