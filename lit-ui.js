/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vt = globalThis, si = vt.ShadowRoot && (vt.ShadyCSS === void 0 || vt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, oi = Symbol(), Ui = /* @__PURE__ */ new WeakMap();
let ro = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== oi) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (si && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Ui.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Ui.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const no = (o) => new ro(typeof o == "string" ? o : o + "", void 0, oi), f = (o, ...e) => {
  const t = o.length === 1 ? o[0] : e.reduce((i, s, r) => i + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + o[r + 1], o[0]);
  return new ro(t, o, oi);
}, Do = (o, e) => {
  if (si) o.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), s = vt.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = t.cssText, o.appendChild(i);
  }
}, Ni = si ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return no(t);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Mo, defineProperty: To, getOwnPropertyDescriptor: Oo, getOwnPropertyNames: Po, getOwnPropertySymbols: $o, getPrototypeOf: Fo } = Object, ze = globalThis, Gi = ze.trustedTypes, Bo = Gi ? Gi.emptyScript : "", Rt = ze.reactiveElementPolyfillSupport, lt = (o, e) => o, kt = { toAttribute(o, e) {
  switch (e) {
    case Boolean:
      o = o ? Bo : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, e) {
  let t = o;
  switch (e) {
    case Boolean:
      t = o !== null;
      break;
    case Number:
      t = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(o);
      } catch {
        t = null;
      }
  }
  return t;
} }, ri = (o, e) => !Mo(o, e), Ji = { attribute: !0, type: String, converter: kt, reflect: !1, useDefault: !1, hasChanged: ri };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), ze.litPropertyMetadata ?? (ze.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let He = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ji) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, t);
      s !== void 0 && To(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: s, set: r } = Oo(this.prototype, e) ?? { get() {
      return this[t];
    }, set(n) {
      this[t] = n;
    } };
    return { get: s, set(n) {
      const l = s == null ? void 0 : s.call(this);
      r == null || r.call(this, n), this.requestUpdate(e, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ji;
  }
  static _$Ei() {
    if (this.hasOwnProperty(lt("elementProperties"))) return;
    const e = Fo(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(lt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(lt("properties"))) {
      const t = this.properties, i = [...Po(t), ...$o(t)];
      for (const s of i) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, s] of t) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const s = this._$Eu(t, i);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const s of i) t.unshift(Ni(s));
    } else e !== void 0 && t.push(Ni(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Do(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$ET(e, t) {
    var r;
    const i = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, i);
    if (s !== void 0 && i.reflect === !0) {
      const n = (((r = i.converter) == null ? void 0 : r.toAttribute) !== void 0 ? i.converter : kt).toAttribute(t, i.type);
      this._$Em = e, n == null ? this.removeAttribute(s) : this.setAttribute(s, n), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var r, n;
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const l = i.getPropertyOptions(s), d = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((r = l.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? l.converter : kt;
      this._$Em = s;
      const h = d.fromAttribute(t, l.type);
      this[s] = h ?? ((n = this._$Ej) == null ? void 0 : n.get(s)) ?? h, this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    var s;
    if (e !== void 0) {
      const r = this.constructor, n = this[e];
      if (i ?? (i = r.getPropertyOptions(e)), !((i.hasChanged ?? ri)(n, t) || i.useDefault && i.reflect && n === ((s = this._$Ej) == null ? void 0 : s.get(e)) && !this.hasAttribute(r._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: s, wrapped: r }, n) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, n ?? t ?? this[e]), r !== !0 || n !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [r, n] of s) {
        const { wrapped: l } = n, d = this[r];
        l !== !0 || this._$AL.has(r) || d === void 0 || this.C(r, void 0, n, d);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((s) => {
        var r;
        return (r = s.hostUpdate) == null ? void 0 : r.call(s);
      }), this.update(t)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
He.elementStyles = [], He.shadowRootOptions = { mode: "open" }, He[lt("elementProperties")] = /* @__PURE__ */ new Map(), He[lt("finalized")] = /* @__PURE__ */ new Map(), Rt == null || Rt({ ReactiveElement: He }), (ze.reactiveElementVersions ?? (ze.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = globalThis, Ct = ct.trustedTypes, Ki = Ct ? Ct.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, ao = "$lit$", Ee = `lit$${Math.random().toFixed(9).slice(2)}$`, lo = "?" + Ee, Lo = `<${lo}>`, Pe = document, dt = () => Pe.createComment(""), ht = (o) => o === null || typeof o != "object" && typeof o != "function", ni = Array.isArray, qo = (o) => ni(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", Yt = `[ 	
\f\r]`, it = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ji = /-->/g, Wi = />/g, De = RegExp(`>|${Yt}(?:([^\\s"'>=/]+)(${Yt}*=${Yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qi = /'/g, Zi = /"/g, co = /^(?:script|style|textarea|title)$/i, Ho = (o) => (e, ...t) => ({ _$litType$: o, strings: e, values: t }), c = Ho(1), Q = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), Xi = /* @__PURE__ */ new WeakMap(), Te = Pe.createTreeWalker(Pe, 129);
function ho(o, e) {
  if (!ni(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ki !== void 0 ? Ki.createHTML(e) : e;
}
const Vo = (o, e) => {
  const t = o.length - 1, i = [];
  let s, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", n = it;
  for (let l = 0; l < t; l++) {
    const d = o[l];
    let h, w, m = -1, g = 0;
    for (; g < d.length && (n.lastIndex = g, w = n.exec(d), w !== null); ) g = n.lastIndex, n === it ? w[1] === "!--" ? n = ji : w[1] !== void 0 ? n = Wi : w[2] !== void 0 ? (co.test(w[2]) && (s = RegExp("</" + w[2], "g")), n = De) : w[3] !== void 0 && (n = De) : n === De ? w[0] === ">" ? (n = s ?? it, m = -1) : w[1] === void 0 ? m = -2 : (m = n.lastIndex - w[2].length, h = w[1], n = w[3] === void 0 ? De : w[3] === '"' ? Zi : Qi) : n === Zi || n === Qi ? n = De : n === ji || n === Wi ? n = it : (n = De, s = void 0);
    const k = n === De && o[l + 1].startsWith("/>") ? " " : "";
    r += n === it ? d + Lo : m >= 0 ? (i.push(h), d.slice(0, m) + ao + d.slice(m) + Ee + k) : d + Ee + (m === -2 ? l : k);
  }
  return [ho(o, r + (o[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class ut {
  constructor({ strings: e, _$litType$: t }, i) {
    let s;
    this.parts = [];
    let r = 0, n = 0;
    const l = e.length - 1, d = this.parts, [h, w] = Vo(e, t);
    if (this.el = ut.createElement(h, i), Te.currentNode = this.el.content, t === 2 || t === 3) {
      const m = this.el.content.firstChild;
      m.replaceWith(...m.childNodes);
    }
    for (; (s = Te.nextNode()) !== null && d.length < l; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const m of s.getAttributeNames()) if (m.endsWith(ao)) {
          const g = w[n++], k = s.getAttribute(m).split(Ee), T = /([.?@])?(.*)/.exec(g);
          d.push({ type: 1, index: r, name: T[2], strings: k, ctor: T[1] === "." ? Yo : T[1] === "?" ? Uo : T[1] === "@" ? No : Lt }), s.removeAttribute(m);
        } else m.startsWith(Ee) && (d.push({ type: 6, index: r }), s.removeAttribute(m));
        if (co.test(s.tagName)) {
          const m = s.textContent.split(Ee), g = m.length - 1;
          if (g > 0) {
            s.textContent = Ct ? Ct.emptyScript : "";
            for (let k = 0; k < g; k++) s.append(m[k], dt()), Te.nextNode(), d.push({ type: 2, index: ++r });
            s.append(m[g], dt());
          }
        }
      } else if (s.nodeType === 8) if (s.data === lo) d.push({ type: 2, index: r });
      else {
        let m = -1;
        for (; (m = s.data.indexOf(Ee, m + 1)) !== -1; ) d.push({ type: 7, index: r }), m += Ee.length - 1;
      }
      r++;
    }
  }
  static createElement(e, t) {
    const i = Pe.createElement("template");
    return i.innerHTML = e, i;
  }
}
function Ne(o, e, t = o, i) {
  var n, l;
  if (e === Q) return e;
  let s = i !== void 0 ? (n = t._$Co) == null ? void 0 : n[i] : t._$Cl;
  const r = ht(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== r && ((l = s == null ? void 0 : s._$AO) == null || l.call(s, !1), r === void 0 ? s = void 0 : (s = new r(o), s._$AT(o, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = s : t._$Cl = s), s !== void 0 && (e = Ne(o, s._$AS(o, e.values), s, i)), e;
}
let Ro = class {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: i } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? Pe).importNode(t, !0);
    Te.currentNode = s;
    let r = Te.nextNode(), n = 0, l = 0, d = i[0];
    for (; d !== void 0; ) {
      if (n === d.index) {
        let h;
        d.type === 2 ? h = new We(r, r.nextSibling, this, e) : d.type === 1 ? h = new d.ctor(r, d.name, d.strings, this, e) : d.type === 6 && (h = new Go(r, this, e)), this._$AV.push(h), d = i[++l];
      }
      n !== (d == null ? void 0 : d.index) && (r = Te.nextNode(), n++);
    }
    return Te.currentNode = Pe, s;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
};
class We {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, s) {
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = Ne(this, e, t), ht(e) ? e === u || e == null || e === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : e !== this._$AH && e !== Q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : qo(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== u && ht(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Pe.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var r;
    const { values: t, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = ut.createElement(ho(i.h, i.h[0]), this.options)), i);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === s) this._$AH.p(t);
    else {
      const n = new Ro(s, this), l = n.u(this.options);
      n.p(t), this.T(l), this._$AH = n;
    }
  }
  _$AC(e) {
    let t = Xi.get(e.strings);
    return t === void 0 && Xi.set(e.strings, t = new ut(e)), t;
  }
  k(e) {
    ni(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, s = 0;
    for (const r of e) s === t.length ? t.push(i = new We(this.O(dt()), this.O(dt()), this, this.options)) : i = t[s], i._$AI(r), s++;
    s < t.length && (this._$AR(i && i._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = e.nextSibling;
      e.remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class Lt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, s, r) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = u;
  }
  _$AI(e, t = this, i, s) {
    const r = this.strings;
    let n = !1;
    if (r === void 0) e = Ne(this, e, t, 0), n = !ht(e) || e !== this._$AH && e !== Q, n && (this._$AH = e);
    else {
      const l = e;
      let d, h;
      for (e = r[0], d = 0; d < r.length - 1; d++) h = Ne(this, l[i + d], t, d), h === Q && (h = this._$AH[d]), n || (n = !ht(h) || h !== this._$AH[d]), h === u ? e = u : e !== u && (e += (h ?? "") + r[d + 1]), this._$AH[d] = h;
    }
    n && !s && this.j(e);
  }
  j(e) {
    e === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Yo extends Lt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === u ? void 0 : e;
  }
}
class Uo extends Lt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== u);
  }
}
class No extends Lt {
  constructor(e, t, i, s, r) {
    super(e, t, i, s, r), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Ne(this, e, t, 0) ?? u) === Q) return;
    const i = this._$AH, s = e === u && i !== u || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, r = e !== u && (i === u || s);
    s && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Go {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Ne(this, e);
  }
}
const Jo = { I: We }, Ut = ct.litHtmlPolyfillSupport;
Ut == null || Ut(ut, We), (ct.litHtmlVersions ?? (ct.litHtmlVersions = [])).push("3.3.1");
const Ko = (o, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const r = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = s = new We(e.insertBefore(dt(), r), r, void 0, t ?? {});
  }
  return s._$AI(o), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Oe = globalThis;
let _ = class extends He {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ko(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return Q;
  }
};
var oo;
_._$litElement$ = !0, _.finalized = !0, (oo = Oe.litElementHydrateSupport) == null || oo.call(Oe, { LitElement: _ });
const Nt = Oe.litElementPolyfillSupport;
Nt == null || Nt({ LitElement: _ });
(Oe.litElementVersions ?? (Oe.litElementVersions = [])).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const jo = { attribute: !0, type: String, converter: kt, reflect: !1, hasChanged: ri }, Wo = (o = jo, e, t) => {
  const { kind: i, metadata: s } = t;
  let r = globalThis.litPropertyMetadata.get(s);
  if (r === void 0 && globalThis.litPropertyMetadata.set(s, r = /* @__PURE__ */ new Map()), i === "setter" && ((o = Object.create(o)).wrapped = !0), r.set(t.name, o), i === "accessor") {
    const { name: n } = t;
    return { set(l) {
      const d = e.get.call(this);
      e.set.call(this, l), this.requestUpdate(n, d, o);
    }, init(l) {
      return l !== void 0 && this.C(n, void 0, o, l), l;
    } };
  }
  if (i === "setter") {
    const { name: n } = t;
    return function(l) {
      const d = this[n];
      e.call(this, l), this.requestUpdate(n, d, o);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function a(o) {
  return (e, t) => typeof t == "object" ? Wo(o, e, t) : ((i, s, r) => {
    const n = s.hasOwnProperty(r);
    return s.constructor.createProperty(r, i), n ? Object.getOwnPropertyDescriptor(s, r) : void 0;
  })(o, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function b(o) {
  return a({ ...o, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qo = (o, e, t) => (t.configurable = !0, t.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(o, e, t), t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function q(o, e) {
  return (t, i, s) => {
    const r = (n) => {
      var l;
      return ((l = n.renderRoot) == null ? void 0 : l.querySelector(o)) ?? null;
    };
    return Qo(t, i, { get() {
      return r(this);
    } });
  };
}
const y = f`
  :host {
    /* Colors - Blue */
    --blue-100: rgb(224, 239, 255);
    --blue-200: rgb(173, 212, 255);
    --blue-300: rgb(122, 185, 255);
    --blue-400: rgb(71, 158, 255);
    --blue-500: rgb(20, 131, 255);
    --blue-600: rgb(0, 106, 224);
    --blue-700: rgb(0, 82, 173);
    --blue-800: rgb(0, 58, 122);
    --blue-900: rgb(0, 34, 71);

    /* Colors - Light Blue */
    --lightblue-100: rgb(234, 249, 255);
    --lightblue-200: rgb(184, 234, 254);
    --lightblue-300: rgb(134, 219, 253);
    --lightblue-400: rgb(84, 205, 252);
    --lightblue-500: rgb(34, 190, 251);
    --lightblue-600: rgb(4, 166, 230);
    --lightblue-700: rgb(3, 130, 180);
    --lightblue-800: rgb(2, 94, 130);
    --lightblue-900: rgb(1, 58, 80);

    /* Colors - Green */
    --green-100: rgb(206, 249, 240);
    --green-200: rgb(161, 243, 226);
    --green-300: rgb(116, 237, 212);
    --green-400: rgb(71, 231, 198);
    --green-500: rgb(29, 222, 182);
    --green-600: rgb(23, 177, 145);
    --green-700: rgb(17, 132, 108);
    --green-800: rgb(11, 87, 71);
    --green-900: rgb(5, 42, 34);

    /* Colors - Orange */
    --orange-100: rgb(255, 244, 224);
    --orange-200: rgb(255, 225, 173);
    --orange-300: rgb(255, 206, 122);
    --orange-400: rgb(255, 187, 71);
    --orange-500: rgb(255, 168, 20);
    --orange-600: rgb(224, 141, 0);
    --orange-700: rgb(173, 109, 0);
    --orange-800: rgb(122, 77, 0);
    --orange-900: rgb(71, 45, 0);

    /* Colors - Red */
    --red-100: rgb(255, 230, 224);
    --red-200: rgb(255, 190, 173);
    --red-300: rgb(255, 150, 122);
    --red-400: rgb(255, 109, 71);
    --red-500: rgb(255, 69, 20);
    --red-600: rgb(224, 47, 0);
    --red-700: rgb(173, 36, 0);
    --red-800: rgb(122, 25, 0);
    --red-900: rgb(71, 15, 0);

    /* Colors - Purple */
    --purple-100: rgb(255, 255, 255);
    --purple-200: rgb(239, 234, 252);
    --purple-300: rgb(205, 190, 245);
    --purple-400: rgb(172, 145, 239);
    --purple-500: rgb(138, 101, 232);
    --purple-600: rgb(104, 57, 225);
    --purple-700: rgb(78, 30, 201);
    --purple-800: rgb(61, 23, 157);
    --purple-900: rgb(44, 17, 112);

    /* Colors - Grey */
    --grey-050: rgb(235, 237, 242);
    --grey-100: rgb(205, 210, 221);
    --grey-150: rgb(190, 197, 211);
    --grey-200: rgb(175, 183, 200);
    --grey-250: rgb(160, 170, 190);
    --grey-300: rgb(144, 156, 180);
    --grey-350: rgb(129, 143, 169);
    --grey-350-rgb: 129, 143, 169;
    --grey-400: rgb(114, 129, 159);
    --grey-450: rgb(100, 116, 147);
    --grey-500: rgb(90, 104, 132);
    --grey-550: rgb(80, 92, 117);
    --grey-550-rgb: 80, 92, 117;
    --grey-600: rgb(69, 80, 102);
    --grey-650: rgb(59, 68, 87);
    --grey-650-rgb: 59, 68, 87;
    --grey-700: rgb(49, 56, 71);
    --grey-725: rgb(43, 50, 64);
    --grey-750: rgb(38, 44, 56);
    --grey-775: rgb(33, 38, 49);
    --grey-800: rgb(28, 32, 41);
    --grey-825: rgb(23, 26, 33);
    --grey-850: rgb(18, 20, 26);
    --grey-875: rgb(12, 14, 18);
    --grey-900: rgb(7, 8, 11);

    /* Colors - Base */
    --white: rgb(255, 255, 255);
    --black: rgb(0, 0, 0);

    /* Typography - Font Sizes */
    --font-size-base: 16px;
    --font-size-xxs: 0.625rem;
    --font-size-xs: 0.75rem;
    --font-size-s: 0.875rem;
    --font-size-m: 1rem;
    --font-size-l: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.75rem;
    --font-size-4xl: 2rem;
    --font-size-5xl: 2.25rem;
    --font-size-6xl: 3rem;

    /* Typography - Line Heights */
    --font-line-height-100: 1.1;
    --font-line-height-200: 1.42;
    --font-line-height-300: 20px;
    --font-line-height-400: 40px;

    /* Typography - Font Weights */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    /* Spacing */
    --spacing-0: 0;
    --spacing-2: 2px;
    --spacing-4: 4px;
    --spacing-8: 8px;
    --spacing-10: 10px;
    --spacing-12: 12px;
    --spacing-16: 16px;
    --spacing-20: 20px;
    --spacing-24: 24px;
    --spacing-32: 32px;

    /* Border Radius */
    --radius-0: 0;
    --radius-2: 2px;
    --radius-4: 4px;
    --radius-6: 6px;
    --radius-8: 8px;
    --radius-16: 16px;
    --radius-64: 64px;

    /* Semantic colors */
    --color-error: var(--red-500);
    --color-success: #b0e53c;

    /* Shadows */
    --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.3);
    --shadow-2: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    --shadow-3: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);
  }
`, ll = f`
  * {
    box-sizing: border-box;
  }
`, Zo = f`
  :host {
    display: inline-block;
    cursor: pointer;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  button {
    box-sizing: border-box;
    color: var(--button-text, var(--white));
    display: inline-block;
    padding: 0.35em 0.55em;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    font: inherit;
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-bold);
    outline: none;
    line-height: var(--font-line-height-100);
    outline-offset: 2px;
    cursor: inherit;
    width: 100%;

    background: var(--button-bg, var(--grey-600));
    border: solid 1px transparent;
    border-color: var(--button-border, transparent);
    border-radius: var(--radius-4);
    box-shadow: var(--button-shadow, var(--shadow-1));
    transition: background-color 200ms, box-shadow 200ms;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.07);
  }

  button:focus,
  button:focus-within {
    outline: none;
  }

  button:focus-visible {
    outline: 2px solid var(--grey-600);
  }

  /* Hover states (--button-hover set by swim-button-group when used inside a group) */
  :host(:not([disabled])) button:hover {
    cursor: pointer;
    background: var(--button-hover, var(--grey-700));
    outline-color: var(--button-hover, var(--grey-700));
  }

  /* Size variants */
  :host([size='small']) button {
    font-size: var(--font-size-xxs);
  }

  :host([size='large']) button {
    font-size: 1.3em;
  }

  /* Variant: Primary (--button-* overrides when inside swim-button-group) */
  :host([variant='primary']) button {
    background-color: var(--button-bg, var(--blue-400));
    border-color: var(--button-border, var(--blue-400));
    color: var(--button-text, var(--white));
    outline-color: var(--button-border, var(--blue-500));
  }

  :host([variant='primary']) button:focus-visible {
    outline-color: var(--button-border, var(--blue-500));
  }

  :host([variant='primary']:not([disabled])) button:hover {
    background-color: var(--button-hover, var(--blue-500));
    border-color: var(--button-hover, var(--blue-500));
  }

  /* Variant: Warning */
  :host([variant='warning']) button {
    background-color: var(--orange-400);
    color: var(--grey-900);
    outline-color: var(--orange-500);
  }

  :host([variant='warning']) button:focus-visible {
    outline-color: var(--orange-500);
  }

  :host([variant='warning']:not([disabled])) button:hover {
    background-color: var(--orange-500);
  }

  /* Variant: Danger */
  :host([variant='danger']) button {
    background-color: var(--red-400);
    outline-color: var(--red-400);
  }

  :host([variant='danger']) button:focus-visible {
    outline-color: var(--red-400);
  }

  :host([variant='danger']:not([disabled])) button:hover {
    background-color: var(--red-500);
  }

  /* Variant: Link */
  :host([variant='link']) button {
    background-color: transparent;
    box-shadow: none;
  }

  :host([variant='link']:not([disabled])) button:hover {
    background-color: transparent;
  }

  /* Variant: Bordered */
  :host([variant='bordered']) button,
  :host([variant='primary'][bordered]) button {
    border: 1px solid var(--blue-400);
    color: var(--blue-400);
    background-color: transparent;
    box-shadow: none;
    outline-color: var(--blue-400);
  }

  :host([variant='bordered']) button:focus-visible,
  :host([variant='primary'][bordered]) button:focus-visible {
    outline-color: var(--blue-400);
  }

  :host([variant='bordered']:not([disabled])) button:hover,
  :host([variant='primary'][bordered]:not([disabled])) button:hover {
    border-color: var(--blue-200);
    color: var(--blue-200);
  }

  /* Button content and state icon container */
  .content {
    text-overflow: ellipsis;
    overflow-x: clip;
    overflow-y: visible;
    width: 100%;
    display: block;
    white-space: nowrap;
    transition: opacity 0.25s ease-out;
  }

  .state-icon {
    position: absolute;
    inset: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
  }

  /* State: In Progress */
  :host([state='in-progress']) {
    cursor: wait !important;
    position: relative;
    opacity: 1 !important;
  }

  :host([state='in-progress']) button {
    opacity: 1;
    pointer-events: none;
  }

  :host([state='in-progress']) .content {
    opacity: 0;
  }

  :host([state='in-progress']) .state-icon {
    opacity: 1;
  }

  /* State: Success */
  :host([state='success']) {
    cursor: wait !important;
  }

  :host([state='success']) button {
    color: black !important;
    background-color: var(--green-500) !important;
    background: var(--green-500) !important;
    border: 1px solid var(--green-500) !important;
    pointer-events: none;
  }

  :host([state='success']) .content {
    opacity: 0;
  }

  :host([state='success']) .state-icon {
    opacity: 1;
    color: var(--white);
  }

  /* State: Fail */
  :host([state='fail']) {
    cursor: wait !important;
  }

  :host([state='fail']) button {
    color: black !important;
    background-color: var(--red-500) !important;
    background: var(--red-500) !important;
    border: 1px solid var(--red-500) !important;
    pointer-events: none;
  }

  :host([state='fail']) .content {
    opacity: 0;
  }

  :host([state='fail']) .state-icon {
    opacity: 1;
    color: var(--white);
  }

  /* Icon styles */
  .icon {
    height: 1em;
    width: 1em;
    font-weight: var(--font-weight-bold);
    color: var(--white);
    overflow: hidden;
    font-size: var(--font-size-m);
    display: inline-block;
  }

  /* Spinner animation */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    animation: spin 1s linear infinite;
  }
`;
var Y = /* @__PURE__ */ ((o) => (o.Active = "active", o.InProgress = "in-progress", o.Success = "success", o.Fail = "fail", o))(Y || {});
function p(o) {
  return o != null && `${o}` != "false";
}
function S(o, e = null) {
  return isNaN(parseFloat(o)) || isNaN(Number(o)) ? e : Number(o);
}
const Xo = f`
  .swim-icon.lit-3d-rotate::before {
    content: '\\ea01';
  }
  .swim-icon.lit-action::before {
    content: '\\ea02';
  }
  .swim-icon.lit-action-close::before {
    content: '\\ea03';
  }
  .swim-icon.lit-action-maximize::before {
    content: '\\ea04';
  }
  .swim-icon.lit-action-maximize-inverse::before {
    content: '\\ea05';
  }
  .swim-icon.lit-action-minimize::before {
    content: '\\ea06';
  }
  .swim-icon.lit-action-outline::before {
    content: '\\ea07';
  }
  .swim-icon.lit-action-outline-small::before {
    content: '\\ea08';
  }
  .swim-icon.lit-add-circle::before {
    content: '\\ea09';
  }
  .swim-icon.lit-add-circle-filled::before {
    content: '\\ea0a';
  }
  .swim-icon.lit-add-circle-medium::before {
    content: '\\ea0b';
  }
  .swim-icon.lit-add-circle-thin::before {
    content: '\\ea0c';
  }
  .swim-icon.lit-add-edge::before {
    content: '\\ea0d';
  }
  .swim-icon.lit-add-new::before {
    content: '\\ea0e';
  }
  .swim-icon.lit-add-node::before {
    content: '\\ea0f';
  }
  .swim-icon.lit-advanced-pie::before {
    content: '\\ea10';
  }
  .swim-icon.lit-alert::before {
    content: '\\ea11';
  }
  .swim-icon.lit-app-store::before {
    content: '\\ea12';
  }
  .swim-icon.lit-app-workspaces::before {
    content: '\\ea13';
  }
  .swim-icon.lit-applet::before {
    content: '\\ea14';
  }
  .swim-icon.lit-applets::before {
    content: '\\ea15';
  }
  .swim-icon.lit-application::before {
    content: '\\ea16';
  }
  .swim-icon.lit-apps::before {
    content: '\\ea17';
  }
  .swim-icon.lit-area-chart::before {
    content: '\\ea18';
  }
  .swim-icon.lit-arrow-bold-circle-left::before {
    content: '\\ea19';
  }
  .swim-icon.lit-arrow-bold-circle-right::before {
    content: '\\ea1a';
  }
  .swim-icon.lit-arrow-bold-down::before {
    content: '\\ea1b';
  }
  .swim-icon.lit-arrow-bold-left::before {
    content: '\\ea1c';
  }
  .swim-icon.lit-arrow-bold-right::before {
    content: '\\ea1d';
  }
  .swim-icon.lit-arrow-bold-up::before {
    content: '\\ea1e';
  }
  .swim-icon.lit-arrow-down::before {
    content: '\\ea1f';
  }
  .swim-icon.lit-arrow-input::before {
    content: '\\ea20';
  }
  .swim-icon.lit-arrow-left::before {
    content: '\\ea21';
  }
  .swim-icon.lit-arrow-output::before {
    content: '\\ea22';
  }
  .swim-icon.lit-arrow-right::before {
    content: '\\ea23';
  }
  .swim-icon.lit-arrow-right-down-medium::before {
    content: '\\ea24';
  }
  .swim-icon.lit-arrow-right-medium::before {
    content: '\\ea25';
  }
  .swim-icon.lit-arrow-tail-left::before {
    content: '\\ea26';
  }
  .swim-icon.lit-arrow-tail-right::before {
    content: '\\ea27';
  }
  .swim-icon.lit-arrow-tail-solid-left::before {
    content: '\\ea28';
  }
  .swim-icon.lit-arrow-tail-solid-right::before {
    content: '\\ea29';
  }
  .swim-icon.lit-arrow-tail-subright::before {
    content: '\\ea2a';
  }
  .swim-icon.lit-arrow-up::before {
    content: '\\ea2b';
  }
  .swim-icon.lit-asset-outline::before {
    content: '\\ea2c';
  }
  .swim-icon.lit-asset-outline-small::before {
    content: '\\ea2d';
  }
  .swim-icon.lit-assets::before {
    content: '\\ea2e';
  }
  .swim-icon.lit-attachment::before {
    content: '\\ea2f';
  }
  .swim-icon.lit-automation::before {
    content: '\\ea30';
  }
  .swim-icon.lit-automation-alternate::before {
    content: '\\ea31';
  }
  .swim-icon.lit-back-arrow::before {
    content: '\\ea32';
  }
  .swim-icon.lit-back-arrow-filled::before {
    content: '\\ea33';
  }
  .swim-icon.lit-bars::before {
    content: '\\ea34';
  }
  .swim-icon.lit-bell::before {
    content: '\\ea35';
  }
  .swim-icon.lit-bell-alarm::before {
    content: '\\ea36';
  }
  .swim-icon.lit-bold::before {
    content: '\\ea37';
  }
  .swim-icon.lit-bolt::before {
    content: '\\ea38';
  }
  .swim-icon.lit-branch-node::before {
    content: '\\ea39';
  }
  .swim-icon.lit-branch-node-vert::before {
    content: '\\ea3a';
  }
  .swim-icon.lit-broom::before {
    content: '\\ea3b';
  }
  .swim-icon.lit-browser-size::before {
    content: '\\ea3c';
  }
  .swim-icon.lit-bug::before {
    content: '\\ea3d';
  }
  .swim-icon.lit-builder::before {
    content: '\\ea3e';
  }
  .swim-icon.lit-builder-outline::before {
    content: '\\ea3f';
  }
  .swim-icon.lit-button-push-outline::before {
    content: '\\ea40';
  }
  .swim-icon.lit-button-push-outline-large::before {
    content: '\\ea41';
  }
  .swim-icon.lit-button-push-outline-small::before {
    content: '\\ea42';
  }
  .swim-icon.lit-calendar::before {
    content: '\\ea43';
  }
  .swim-icon.lit-calendar-clock::before {
    content: '\\ea44';
  }
  .swim-icon.lit-calender-clock::before {
    content: '\\ea45';
  }
  .swim-icon.lit-cards::before {
    content: '\\ea46';
  }
  .swim-icon.lit-center-align::before {
    content: '\\ea47';
  }
  .swim-icon.lit-chart-area::before {
    content: '\\ea48';
  }
  .swim-icon.lit-chart-bar-bar::before {
    content: '\\ea49';
  }
  .swim-icon.lit-chart-bubble::before {
    content: '\\ea4a';
  }
  .swim-icon.lit-chart-donut::before {
    content: '\\ea4b';
  }
  .swim-icon.lit-chart-full-stacked-area::before {
    content: '\\ea4c';
  }
  .swim-icon.lit-chart-heat::before {
    content: '\\ea4d';
  }
  .swim-icon.lit-chart-horz-full-stack-bar::before {
    content: '\\ea4e';
  }
  .swim-icon.lit-chart-number-card::before {
    content: '\\ea4f';
  }
  .swim-icon.lit-chart-pie::before {
    content: '\\ea50';
  }
  .swim-icon.lit-chart-pie-grid::before {
    content: '\\ea51';
  }
  .swim-icon.lit-chart-scatter::before {
    content: '\\ea52';
  }
  .swim-icon.lit-chart-spider::before {
    content: '\\ea53';
  }
  .swim-icon.lit-chart-stacked-area::before {
    content: '\\ea54';
  }
  .swim-icon.lit-chart-vert-bar::before {
    content: '\\ea55';
  }
  .swim-icon.lit-chart-vert-bar2::before {
    content: '\\ea56';
  }
  .swim-icon.lit-chart-vert-stacked-bar::before {
    content: '\\ea57';
  }
  .swim-icon.lit-check::before {
    content: '\\ea58';
  }
  .swim-icon.lit-check-filled::before {
    content: '\\ea59';
  }
  .swim-icon.lit-check-filled-sm::before {
    content: '\\ea5a';
  }
  .swim-icon.lit-check-square-filled::before {
    content: '\\ea5b';
  }
  .swim-icon.lit-checklist::before {
    content: '\\ea5c';
  }
  .swim-icon.lit-chevron-bold-down::before {
    content: '\\ea5d';
  }
  .swim-icon.lit-chevron-bold-left::before {
    content: '\\ea5e';
  }
  .swim-icon.lit-chevron-bold-right::before {
    content: '\\ea5f';
  }
  .swim-icon.lit-chevron-bold-up::before {
    content: '\\ea60';
  }
  .swim-icon.lit-circle::before {
    content: '\\ea61';
  }
  .swim-icon.lit-circle-filled::before {
    content: '\\ea62';
  }
  .swim-icon.lit-circles::before {
    content: '\\ea63';
  }
  .swim-icon.lit-circuit-board::before {
    content: '\\ea64';
  }
  .swim-icon.lit-clipboard::before {
    content: '\\ea65';
  }
  .swim-icon.lit-clock::before {
    content: '\\ea66';
  }
  .swim-icon.lit-cloud-download::before {
    content: '\\ea67';
  }
  .swim-icon.lit-cloud-upload::before {
    content: '\\ea68';
  }
  .swim-icon.lit-code::before {
    content: '\\ea69';
  }
  .swim-icon.lit-cog::before {
    content: '\\ea6a';
  }
  .swim-icon.lit-collapse::before {
    content: '\\ea6b';
  }
  .swim-icon.lit-commandline::before {
    content: '\\ea6c';
  }
  .swim-icon.lit-comments::before {
    content: '\\ea6d';
  }
  .swim-icon.lit-component::before {
    content: '\\ea6e';
  }
  .swim-icon.lit-component-create::before {
    content: '\\ea6f';
  }
  .swim-icon.lit-condition::before {
    content: '\\ea70';
  }
  .swim-icon.lit-copy::before {
    content: '\\ea71';
  }
  .swim-icon.lit-copy-app::before {
    content: '\\ea72';
  }
  .swim-icon.lit-copy-filled::before {
    content: '\\ea73';
  }
  .swim-icon.lit-credit-card::before {
    content: '\\ea74';
  }
  .swim-icon.lit-dashboard::before {
    content: '\\ea75';
  }
  .swim-icon.lit-dashboard-outline::before {
    content: '\\ea76';
  }
  .swim-icon.lit-database::before {
    content: '\\ea77';
  }
  .swim-icon.lit-debug::before {
    content: '\\ea78';
  }
  .swim-icon.lit-devil::before {
    content: '\\ea79';
  }
  .swim-icon.lit-disable::before {
    content: '\\ea7a';
  }
  .swim-icon.lit-document::before {
    content: '\\ea7b';
  }
  .swim-icon.lit-documentation::before {
    content: '\\ea7c';
  }
  .swim-icon.lit-domain::before {
    content: '\\ea7d';
  }
  .swim-icon.lit-dots-horz::before {
    content: '\\ea7e';
  }
  .swim-icon.lit-dots-vert::before {
    content: '\\ea7f';
  }
  .swim-icon.lit-dots-vert-round::before {
    content: '\\ea80';
  }
  .swim-icon.lit-double-down::before {
    content: '\\ea81';
  }
  .swim-icon.lit-double-left::before {
    content: '\\ea82';
  }
  .swim-icon.lit-double-right::before {
    content: '\\ea83';
  }
  .swim-icon.lit-double-up::before {
    content: '\\ea84';
  }
  .swim-icon.lit-downgrade::before {
    content: '\\ea85';
  }
  .swim-icon.lit-downgrade-horizontal::before {
    content: '\\ea86';
  }
  .swim-icon.lit-download-outline::before {
    content: '\\ea87';
  }
  .swim-icon.lit-download-outline-large::before {
    content: '\\ea88';
  }
  .swim-icon.lit-download-outline-small::before {
    content: '\\ea89';
  }
  .swim-icon.lit-drag::before {
    content: '\\ea8a';
  }
  .swim-icon.lit-edit::before {
    content: '\\ea8b';
  }
  .swim-icon.lit-edit-app::before {
    content: '\\ea8c';
  }
  .swim-icon.lit-edit-outline::before {
    content: '\\ea8d';
  }
  .swim-icon.lit-edit-outline-large::before {
    content: '\\ea8e';
  }
  .swim-icon.lit-edit-outline-small::before {
    content: '\\ea8f';
  }
  .swim-icon.lit-email::before {
    content: '\\ea90';
  }
  .swim-icon.lit-enrich-small::before {
    content: '\\ea91';
  }
  .swim-icon.lit-escalate::before {
    content: '\\ea92';
  }
  .swim-icon.lit-events-outline::before {
    content: '\\ea93';
  }
  .swim-icon.lit-events-outline-small::before {
    content: '\\ea94';
  }
  .swim-icon.lit-expand::before {
    content: '\\ea95';
  }
  .swim-icon.lit-explore::before {
    content: '\\ea96';
  }
  .swim-icon.lit-export::before {
    content: '\\ea97';
  }
  .swim-icon.lit-export-filled::before {
    content: '\\ea98';
  }
  .swim-icon.lit-export-outline::before {
    content: '\\ea99';
  }
  .swim-icon.lit-export-outline-large::before {
    content: '\\ea9a';
  }
  .swim-icon.lit-export-outline-small::before {
    content: '\\ea9b';
  }
  .swim-icon.lit-eye::before {
    content: '\\ea9c';
  }
  .swim-icon.lit-eye-disabled::before {
    content: '\\ea9d';
  }
  .swim-icon.lit-eye-hidden::before {
    content: '\\ea9e';
  }
  .swim-icon.lit-field-created-by::before {
    content: '\\ea9f';
  }
  .swim-icon.lit-field-created-date::before {
    content: '\\eaa0';
  }
  .swim-icon.lit-field-date::before {
    content: '\\eaa1';
  }
  .swim-icon.lit-field-double-select::before {
    content: '\\eaa2';
  }
  .swim-icon.lit-field-dynamic::before {
    content: '\\eaa3';
  }
  .swim-icon.lit-field-edited-by::before {
    content: '\\eaa4';
  }
  .swim-icon.lit-field-edited-date::before {
    content: '\\eaa5';
  }
  .swim-icon.lit-field-grid::before {
    content: '\\eaa6';
  }
  .swim-icon.lit-field-html::before {
    content: '\\eaa7';
  }
  .swim-icon.lit-field-json::before {
    content: '\\eaa8';
  }
  .swim-icon.lit-field-list::before {
    content: '\\eaa9';
  }
  .swim-icon.lit-field-list-small::before {
    content: '\\eaaa';
  }
  .swim-icon.lit-field-lists::before {
    content: '\\eaab';
  }
  .swim-icon.lit-field-multiselect::before {
    content: '\\eaac';
  }
  .swim-icon.lit-field-number::before {
    content: '\\eaad';
  }
  .swim-icon.lit-field-numeric::before {
    content: '\\eaae';
  }
  .swim-icon.lit-field-richtext::before {
    content: '\\eaaf';
  }
  .swim-icon.lit-field-single-select::before {
    content: '\\eab0';
  }
  .swim-icon.lit-field-singleline::before {
    content: '\\eab1';
  }
  .swim-icon.lit-field-text::before {
    content: '\\eab2';
  }
  .swim-icon.lit-field-textarea::before {
    content: '\\eab3';
  }
  .swim-icon.lit-field-textual::before {
    content: '\\eab4';
  }
  .swim-icon.lit-field-users::before {
    content: '\\eab5';
  }
  .swim-icon.lit-filter::before {
    content: '\\eab6';
  }
  .swim-icon.lit-filter-bar::before {
    content: '\\eab7';
  }
  .swim-icon.lit-find-page::before {
    content: '\\eab8';
  }
  .swim-icon.lit-flame::before {
    content: '\\eab9';
  }
  .swim-icon.lit-folder::before {
    content: '\\eaba';
  }
  .swim-icon.lit-folder-closed-small::before {
    content: '\\eabb';
  }
  .swim-icon.lit-folder-open-small::before {
    content: '\\eabc';
  }
  .swim-icon.lit-folders::before {
    content: '\\eabd';
  }
  .swim-icon.lit-font::before {
    content: '\\eabe';
  }
  .swim-icon.lit-format-indent-decrease::before {
    content: '\\eabf';
  }
  .swim-icon.lit-format-indent-increase::before {
    content: '\\eac0';
  }
  .swim-icon.lit-formula::before {
    content: '\\eac1';
  }
  .swim-icon.lit-forward-arrow::before {
    content: '\\eac2';
  }
  .swim-icon.lit-forward-arrow-filled::before {
    content: '\\eac3';
  }
  .swim-icon.lit-full-align::before {
    content: '\\eac4';
  }
  .swim-icon.lit-gauge::before {
    content: '\\eac5';
  }
  .swim-icon.lit-gear::before {
    content: '\\eac6';
  }
  .swim-icon.lit-gear-small::before {
    content: '\\eac7';
  }
  .swim-icon.lit-gear-square::before {
    content: '\\eac8';
  }
  .swim-icon.lit-globe::before {
    content: '\\eac9';
  }
  .swim-icon.lit-graph::before {
    content: '\\eaca';
  }
  .swim-icon.lit-graph-alt1::before {
    content: '\\eacb';
  }
  .swim-icon.lit-grid-view::before {
    content: '\\eacc';
  }
  .swim-icon.lit-hand::before {
    content: '\\eacd';
  }
  .swim-icon.lit-handle::before {
    content: '\\eace';
  }
  .swim-icon.lit-heat::before {
    content: '\\eacf';
  }
  .swim-icon.lit-helper::before {
    content: '\\ead0';
  }
  .swim-icon.lit-history::before {
    content: '\\ead1';
  }
  .swim-icon.lit-horz-bar-graph-grouped::before {
    content: '\\ead2';
  }
  .swim-icon.lit-horz-stacked-bar::before {
    content: '\\ead3';
  }
  .swim-icon.lit-html-code::before {
    content: '\\ead4';
  }
  .swim-icon.lit-icon-chart-bar-horizontal::before {
    content: '\\ead5';
  }
  .swim-icon.lit-icon-chart-horz-bar::before {
    content: '\\ead6';
  }
  .swim-icon.lit-import-outline::before {
    content: '\\ead7';
  }
  .swim-icon.lit-import-outline-large::before {
    content: '\\ead8';
  }
  .swim-icon.lit-import-outline-small::before {
    content: '\\ead9';
  }
  .swim-icon.lit-info-filled::before {
    content: '\\eada';
  }
  .swim-icon.lit-info-filled-2::before {
    content: '\\eadb';
  }
  .swim-icon.lit-info-filled-small::before {
    content: '\\eadc';
  }
  .swim-icon.lit-ingest-small::before {
    content: '\\eadd';
  }
  .swim-icon.lit-inspect::before {
    content: '\\eade';
  }
  .swim-icon.lit-integration::before {
    content: '\\eadf';
  }
  .swim-icon.lit-integrations::before {
    content: '\\eae0';
  }
  .swim-icon.lit-ip::before {
    content: '\\eae1';
  }
  .swim-icon.lit-italic::before {
    content: '\\eae2';
  }
  .swim-icon.lit-key::before {
    content: '\\eae3';
  }
  .swim-icon.lit-key-outline::before {
    content: '\\eae4';
  }
  .swim-icon.lit-key-outline-small::before {
    content: '\\eae5';
  }
  .swim-icon.lit-keyboard::before {
    content: '\\eae6';
  }
  .swim-icon.lit-keyboard-return::before {
    content: '\\eae7';
  }
  .swim-icon.lit-layer::before {
    content: '\\eae8';
  }
  .swim-icon.lit-left-align::before {
    content: '\\eae9';
  }
  .swim-icon.lit-library::before {
    content: '\\eaea';
  }
  .swim-icon.lit-line-chart::before {
    content: '\\eaeb';
  }
  .swim-icon.lit-line-graph::before {
    content: '\\eaec';
  }
  .swim-icon.lit-linear-gauge::before {
    content: '\\eaed';
  }
  .swim-icon.lit-link::before {
    content: '\\eaee';
  }
  .swim-icon.lit-list::before {
    content: '\\eaef';
  }
  .swim-icon.lit-list-1::before {
    content: '\\eaf0';
  }
  .swim-icon.lit-list-view::before {
    content: '\\eaf1';
  }
  .swim-icon.lit-loading::before {
    content: '\\eaf2';
  }
  .swim-icon.lit-locate-filled::before {
    content: '\\eaf3';
  }
  .swim-icon.lit-locate-outline::before {
    content: '\\eaf4';
  }
  .swim-icon.lit-locate-outline-large::before {
    content: '\\eaf5';
  }
  .swim-icon.lit-location::before {
    content: '\\eaf6';
  }
  .swim-icon.lit-lock::before {
    content: '\\eaf7';
  }
  .swim-icon.lit-lock-sm::before {
    content: '\\eaf8';
  }
  .swim-icon.lit-mail::before {
    content: '\\eaf9';
  }
  .swim-icon.lit-mail-1::before {
    content: '\\eafa';
  }
  .swim-icon.lit-map::before {
    content: '\\eafb';
  }
  .swim-icon.lit-marketplace::before {
    content: '\\eafc';
  }
  .swim-icon.lit-menu::before {
    content: '\\eafd';
  }
  .swim-icon.lit-mfa::before {
    content: '\\eafe';
  }
  .swim-icon.lit-mic::before {
    content: '\\eaff';
  }
  .swim-icon.lit-minus::before {
    content: '\\eb00';
  }
  .swim-icon.lit-money::before {
    content: '\\eb01';
  }
  .swim-icon.lit-mouse-hold::before {
    content: '\\eb02';
  }
  .swim-icon.lit-multi-line::before {
    content: '\\eb03';
  }
  .swim-icon.lit-new-app::before {
    content: '\\eb04';
  }
  .swim-icon.lit-notation-arrow-down-left::before {
    content: '\\eb05';
  }
  .swim-icon.lit-notation-arrow-up::before {
    content: '\\eb06';
  }
  .swim-icon.lit-numbered-list::before {
    content: '\\eb07';
  }
  .swim-icon.lit-open::before {
    content: '\\eb08';
  }
  .swim-icon.lit-orchestration::before {
    content: '\\eb09';
  }
  .swim-icon.lit-paragraph::before {
    content: '\\eb0a';
  }
  .swim-icon.lit-pause::before {
    content: '\\eb0b';
  }
  .swim-icon.lit-pause-circle::before {
    content: '\\eb0c';
  }
  .swim-icon.lit-percent-gauge::before {
    content: '\\eb0d';
  }
  .swim-icon.lit-phone::before {
    content: '\\eb0e';
  }
  .swim-icon.lit-photo::before {
    content: '\\eb0f';
  }
  .swim-icon.lit-pie-chart::before {
    content: '\\eb10';
  }
  .swim-icon.lit-pin::before {
    content: '\\eb11';
  }
  .swim-icon.lit-plane::before {
    content: '\\eb12';
  }
  .swim-icon.lit-play::before {
    content: '\\eb13';
  }
  .swim-icon.lit-play-circle::before {
    content: '\\eb14';
  }
  .swim-icon.lit-playbook-outline::before {
    content: '\\eb15';
  }
  .swim-icon.lit-playbook-outline-small::before {
    content: '\\eb16';
  }
  .swim-icon.lit-plugin::before {
    content: '\\eb17';
  }
  .swim-icon.lit-plugin-outline::before {
    content: '\\eb18';
  }
  .swim-icon.lit-plugin-outline-small::before {
    content: '\\eb19';
  }
  .swim-icon.lit-plus::before {
    content: '\\eb1a';
  }
  .swim-icon.lit-plus-bold::before {
    content: '\\eb1b';
  }
  .swim-icon.lit-prev::before {
    content: '\\eb1c';
  }
  .swim-icon.lit-printer::before {
    content: '\\eb1d';
  }
  .swim-icon.lit-profile::before {
    content: '\\eb1e';
  }
  .swim-icon.lit-profile-filled::before {
    content: '\\eb1f';
  }
  .swim-icon.lit-promote::before {
    content: '\\eb20';
  }
  .swim-icon.lit-promote-horizontal::before {
    content: '\\eb21';
  }
  .swim-icon.lit-question::before {
    content: '\\eb22';
  }
  .swim-icon.lit-question-filled::before {
    content: '\\eb23';
  }
  .swim-icon.lit-question-filled-sm::before {
    content: '\\eb24';
  }
  .swim-icon.lit-radio-button::before {
    content: '\\eb25';
  }
  .swim-icon.lit-redo::before {
    content: '\\eb26';
  }
  .swim-icon.lit-redo-all::before {
    content: '\\eb27';
  }
  .swim-icon.lit-reference::before {
    content: '\\eb28';
  }
  .swim-icon.lit-reference-grid::before {
    content: '\\eb29';
  }
  .swim-icon.lit-reference-multi::before {
    content: '\\eb2a';
  }
  .swim-icon.lit-reference-single::before {
    content: '\\eb2b';
  }
  .swim-icon.lit-reference-tree::before {
    content: '\\eb2c';
  }
  .swim-icon.lit-refresh::before {
    content: '\\eb2d';
  }
  .swim-icon.lit-refresh-circle::before {
    content: '\\eb2e';
  }
  .swim-icon.lit-refresh-small::before {
    content: '\\eb2f';
  }
  .swim-icon.lit-remove::before {
    content: '\\eb30';
  }
  .swim-icon.lit-remove-edge::before {
    content: '\\eb31';
  }
  .swim-icon.lit-remove-node::before {
    content: '\\eb32';
  }
  .swim-icon.lit-remove-users::before {
    content: '\\eb33';
  }
  .swim-icon.lit-repeat::before {
    content: '\\eb34';
  }
  .swim-icon.lit-replace::before {
    content: '\\eb35';
  }
  .swim-icon.lit-reports::before {
    content: '\\eb36';
  }
  .swim-icon.lit-reports-outline::before {
    content: '\\eb37';
  }
  .swim-icon.lit-resize::before {
    content: '\\eb38';
  }
  .swim-icon.lit-right-align::before {
    content: '\\eb39';
  }
  .swim-icon.lit-rocket::before {
    content: '\\eb3a';
  }
  .swim-icon.lit-rotate::before {
    content: '\\eb3b';
  }
  .swim-icon.lit-rule-outline::before {
    content: '\\eb3c';
  }
  .swim-icon.lit-runner::before {
    content: '\\eb3d';
  }
  .swim-icon.lit-runs-outline::before {
    content: '\\eb3e';
  }
  .swim-icon.lit-runs-outline-small::before {
    content: '\\eb3f';
  }
  .swim-icon.lit-sankey::before {
    content: '\\eb40';
  }
  .swim-icon.lit-save::before {
    content: '\\eb41';
  }
  .swim-icon.lit-save-outline::before {
    content: '\\eb42';
  }
  .swim-icon.lit-save-outline-large::before {
    content: '\\eb43';
  }
  .swim-icon.lit-save-outline-small::before {
    content: '\\eb44';
  }
  .swim-icon.lit-screen::before {
    content: '\\eb45';
  }
  .swim-icon.lit-screen-1::before {
    content: '\\eb46';
  }
  .swim-icon.lit-search::before {
    content: '\\eb47';
  }
  .swim-icon.lit-section::before {
    content: '\\eb48';
  }
  .swim-icon.lit-select-all::before {
    content: '\\eb49';
  }
  .swim-icon.lit-select-user::before {
    content: '\\eb4a';
  }
  .swim-icon.lit-select-users::before {
    content: '\\eb4b';
  }
  .swim-icon.lit-sensor-outline::before {
    content: '\\eb4c';
  }
  .swim-icon.lit-sensor-outline-small::before {
    content: '\\eb4d';
  }
  .swim-icon.lit-server::before {
    content: '\\eb4e';
  }
  .swim-icon.lit-shield::before {
    content: '\\eb4f';
  }
  .swim-icon.lit-shrink::before {
    content: '\\eb50';
  }
  .swim-icon.lit-skip::before {
    content: '\\eb51';
  }
  .swim-icon.lit-slide-left::before {
    content: '\\eb52';
  }
  .swim-icon.lit-slide-right::before {
    content: '\\eb53';
  }
  .swim-icon.lit-sliders::before {
    content: '\\eb54';
  }
  .swim-icon.lit-smartphone::before {
    content: '\\eb55';
  }
  .swim-icon.lit-smiley-frown::before {
    content: '\\eb56';
  }
  .swim-icon.lit-snapshot::before {
    content: '\\eb57';
  }
  .swim-icon.lit-solution::before {
    content: '\\eb58';
  }
  .swim-icon.lit-sort-ascending::before {
    content: '\\eb59';
  }
  .swim-icon.lit-sort-descending::before {
    content: '\\eb5a';
  }
  .swim-icon.lit-spaces::before {
    content: '\\eb5b';
  }
  .swim-icon.lit-spaces-list::before {
    content: '\\eb5c';
  }
  .swim-icon.lit-spaces-outline::before {
    content: '\\eb5d';
  }
  .swim-icon.lit-spaces-outline-large::before {
    content: '\\eb5e';
  }
  .swim-icon.lit-speedometer::before {
    content: '\\eb5f';
  }
  .swim-icon.lit-split-handle::before {
    content: '\\eb60';
  }
  .swim-icon.lit-square::before {
    content: '\\eb61';
  }
  .swim-icon.lit-square-filled::before {
    content: '\\eb62';
  }
  .swim-icon.lit-star::before {
    content: '\\eb63';
  }
  .swim-icon.lit-star-filled::before {
    content: '\\eb64';
  }
  .swim-icon.lit-stars::before {
    content: '\\eb65';
  }
  .swim-icon.lit-stopwatch::before {
    content: '\\eb66';
  }
  .swim-icon.lit-superscript::before {
    content: '\\eb67';
  }
  .swim-icon.lit-swap::before {
    content: '\\eb68';
  }
  .swim-icon.lit-switch::before {
    content: '\\eb69';
  }
  .swim-icon.lit-system-diagnostics::before {
    content: '\\eb6a';
  }
  .swim-icon.lit-system-diagnostics-2::before {
    content: '\\eb6b';
  }
  .swim-icon.lit-table::before {
    content: '\\eb6c';
  }
  .swim-icon.lit-tabs::before {
    content: '\\eb6d';
  }
  .swim-icon.lit-tag-filled::before {
    content: '\\eb6e';
  }
  .swim-icon.lit-tags-outline::before {
    content: '\\eb6f';
  }
  .swim-icon.lit-target::before {
    content: '\\eb70';
  }
  .swim-icon.lit-task-outline::before {
    content: '\\eb71';
  }
  .swim-icon.lit-thumb-down-filled::before {
    content: '\\eb72';
  }
  .swim-icon.lit-thumb-down-outline::before {
    content: '\\eb73';
  }
  .swim-icon.lit-thumb-down-outline-large::before {
    content: '\\eb74';
  }
  .swim-icon.lit-thumb-up-filled::before {
    content: '\\eb75';
  }
  .swim-icon.lit-thumb-up-outline::before {
    content: '\\eb76';
  }
  .swim-icon.lit-thumb-up-outline-large::before {
    content: '\\eb77';
  }
  .swim-icon.lit-tracking-id::before {
    content: '\\eb78';
  }
  .swim-icon.lit-transfer::before {
    content: '\\eb79';
  }
  .swim-icon.lit-trash::before {
    content: '\\eb7a';
  }
  .swim-icon.lit-tree::before {
    content: '\\eb7b';
  }
  .swim-icon.lit-tree-collapse::before {
    content: '\\eb7c';
  }
  .swim-icon.lit-tree-expand::before {
    content: '\\eb7d';
  }
  .swim-icon.lit-trend-down::before {
    content: '\\eb7e';
  }
  .swim-icon.lit-trend-level::before {
    content: '\\eb7f';
  }
  .swim-icon.lit-trend-up::before {
    content: '\\eb80';
  }
  .swim-icon.lit-trending::before {
    content: '\\eb81';
  }
  .swim-icon.lit-underline::before {
    content: '\\eb82';
  }
  .swim-icon.lit-undo::before {
    content: '\\eb83';
  }
  .swim-icon.lit-undo-all::before {
    content: '\\eb84';
  }
  .swim-icon.lit-unlink::before {
    content: '\\eb85';
  }
  .swim-icon.lit-upload-outline::before {
    content: '\\eb86';
  }
  .swim-icon.lit-upload-outline-large::before {
    content: '\\eb87';
  }
  .swim-icon.lit-upload-outline-small::before {
    content: '\\eb88';
  }
  .swim-icon.lit-user::before {
    content: '\\eb89';
  }
  .swim-icon.lit-user-add::before {
    content: '\\eb8a';
  }
  .swim-icon.lit-user-circle::before {
    content: '\\eb8b';
  }
  .swim-icon.lit-user-groups::before {
    content: '\\eb8c';
  }
  .swim-icon.lit-users::before {
    content: '\\eb8d';
  }
  .swim-icon.lit-version::before {
    content: '\\eb8e';
  }
  .swim-icon.lit-vert-bar-graph-grouped::before {
    content: '\\eb8f';
  }
  .swim-icon.lit-vert-full-stack-bar::before {
    content: '\\eb90';
  }
  .swim-icon.lit-view-code::before {
    content: '\\eb91';
  }
  .swim-icon.lit-view-designer::before {
    content: '\\eb92';
  }
  .swim-icon.lit-view-split::before {
    content: '\\eb93';
  }
  .swim-icon.lit-wand::before {
    content: '\\eb94';
  }
  .swim-icon.lit-warning-filled::before {
    content: '\\eb95';
  }
  .swim-icon.lit-warning-filled-sm::before {
    content: '\\eb96';
  }
  .swim-icon.lit-warning-thin::before {
    content: '\\eb97';
  }
  .swim-icon.lit-web-api::before {
    content: '\\eb98';
  }
  .swim-icon.lit-webhook-outline::before {
    content: '\\eb99';
  }
  .swim-icon.lit-webhook-outline-large::before {
    content: '\\eb9a';
  }
  .swim-icon.lit-webhook-outline-small::before {
    content: '\\eb9b';
  }
  .swim-icon.lit-widget::before {
    content: '\\eb9c';
  }
  .swim-icon.lit-worker::before {
    content: '\\eb9d';
  }
  .swim-icon.lit-workflow::before {
    content: '\\eb9e';
  }
  .swim-icon.lit-workflow-alternate::before {
    content: '\\eb9f';
  }
  .swim-icon.lit-workflow-alternate-large::before {
    content: '\\eba0';
  }
  .swim-icon.lit-workflow-alternate-small::before {
    content: '\\eba1';
  }
  .swim-icon.lit-workspaces::before {
    content: '\\eba2';
  }
  .swim-icon.lit-workstation::before {
    content: '\\eba3';
  }
  .swim-icon.lit-wrench::before {
    content: '\\eba4';
  }
  .swim-icon.lit-x::before {
    content: '\\eba5';
  }
  .swim-icon.lit-x-filled::before {
    content: '\\eba6';
  }
  .swim-icon.lit-x-small::before {
    content: '\\eba7';
  }
`, er = "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", tr = f`
  @font-face {
    font-family: 'swim-lit-icon';
    src: url('data:font/woff2;base64,${no(er)}') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  :host {
    display: inline-block;
    vertical-align: baseline;
  }

  :host svg {
    fill: currentColor;
    display: block;
    width: 1em;
    height: 1em;
  }

  .swim-icon__stack {
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1em;
    vertical-align: baseline;
  }

  .swim-icon__stack .swim-icon__i {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: inherit;
    line-height: 1em;
  }

  /* Later icons paint on top (e.g. x over square-filled) */
  .swim-icon__stack .swim-icon__i--1 {
    z-index: 1;
  }
  .swim-icon__stack .swim-icon__i--2 {
    z-index: 2;
  }
  .swim-icon__stack .swim-icon__i--3 {
    z-index: 3;
  }

  .swim-icon__stack .swim-icon__i::before {
    line-height: 1em;
  }

  /* Modifier: badge overlay (small icon at top-right), match lit-ui icons-effects */
  .icon-fx-badge {
    font-size: 0.25em !important;
    position: relative;
    top: -0.5em;
    left: 0.5em;
    width: auto;
    height: auto;
  }

  /* Modifier: red color for overlay icon (match lit-ui) */
  .text-red {
    color: var(--red-500);
  }

  /* Font icon base (glyphs in icon-font-glyphs.ts); uses embedded swim-lit-icon font. */
  .swim-icon,
  .swim-icon__i.swim-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    font: normal normal normal 1em/1 'swim-lit-icon';
    font-family: 'swim-lit-icon', sans-serif;
    flex-shrink: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Center the glyph regardless of font metrics (fixes vertical misalignment) */
  .swim-icon::before,
  .swim-icon__i.swim-icon::before {
    display: block;
    line-height: 1;
  }

  /* Loading spinner: animate only the inner glyph inside this shadow root */
  @keyframes swim-icon-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  :host([font-icon='loading']) .swim-icon__i {
    animation: swim-icon-spin 1s linear infinite;
  }

  :host([font-icon='loading']) span[part='icon'] {
    animation: swim-icon-spin 1s linear infinite;
  }

  ${Xo}
`, ir = (o) => `swim-icon ${o.trim().split(" ").map((t) => {
  const [i, s] = t.split(":");
  return i.length ? `${i} ${i}-${s}` : s;
}).join(" ")}`;
class sr {
  constructor() {
    this._defaultFontSetClass = "lit", this._iconMap = /* @__PURE__ */ new Map();
  }
  setDefaultFontSetClass(e) {
    return this._defaultFontSetClass = e, this._defaultFontSetClass;
  }
  get(e, t) {
    return this.lookup(e, t).map((i) => ir(i));
  }
  lookup(e, t) {
    const i = t ?? this._defaultFontSetClass;
    return (Array.isArray(e) ? e : [e]).reduce((s, r) => {
      const n = this._expandKeys(r, i).map((l) => {
        const d = this._iconMap.get(l);
        return d && d.length === 1 ? d[0] : l;
      }).join(" ");
      return s.concat(this._iconMap.get(n) || [n]);
    }, []);
  }
  add(e, t) {
    const i = this._expandKeys(e, this._defaultFontSetClass).join(" "), s = this.lookup(t);
    this._iconMap.set(i, s);
  }
  _expandKeys(e, t) {
    return e.split(" ").map((i) => i.includes(":") ? i : `${t}:${i}`);
  }
}
const or = new sr();
var rr = Object.defineProperty, ft = (o, e, t, i) => {
  for (var s = void 0, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = n(e, t, s) || s);
  return s && rr(e, t, s), s;
};
const es = "swim-icon", bi = class bi extends _ {
  constructor() {
    super(...arguments), this.fontIcon = "", this.alt = "", this.fontSet = "lit", this.iconClass = "", this._cssClasses = [], this._iconClassTokensOnHost = [];
  }
  connectedCallback() {
    super.connectedCallback(), this._updateFontIcon();
  }
  updated(e) {
    super.updated(e), (e.has("fontIcon") || e.has("fontSet")) && this._updateFontIcon(), e.has("iconClass") && this._syncIconClassToHost();
  }
  _syncIconClassToHost() {
    var t;
    const e = (((t = this.iconClass) == null ? void 0 : t.trim()) ?? "").split(/\s+/).filter(Boolean);
    this._iconClassTokensOnHost.forEach((i) => this.classList.remove(i)), e.forEach((i) => this.classList.add(i)), this._iconClassTokensOnHost = e;
  }
  _parseFontIcon(e) {
    if (Array.isArray(e)) return e.filter(Boolean);
    if (typeof e != "string" || !e) return [];
    const t = e.trim();
    if (t.startsWith("["))
      try {
        const i = JSON.parse(t);
        return Array.isArray(i) ? i : [t];
      } catch {
        return [t];
      }
    return [t];
  }
  _updateFontIcon() {
    const e = this._parseFontIcon(this.fontIcon);
    if (e.length === 0) {
      this._cssClasses = [];
      return;
    }
    this._cssClasses = or.get(e, this.fontSet);
  }
  render() {
    var r;
    const e = this._cssClasses, t = !!this.alt, i = ((r = this.iconClass) == null ? void 0 : r.trim()) ?? "", s = i ? ` ${i}` : "";
    return !e || e.length === 0 ? c`
        <span
          part="icon"
          class="${i}"
          role="${t ? "img" : "presentation"}"
          aria-label="${t ? this.alt : u}"
          aria-hidden="${t ? "false" : "true"}"
        >
          <slot></slot>
        </span>
      ` : e.length === 1 ? c`
        <i
          part="icon"
          class="swim-icon__i ${e[0]}${s}"
          role="${t ? "img" : "presentation"}"
          aria-label="${t ? this.alt : u}"
          aria-hidden="${t ? "false" : "true"}"
        ></i>
      ` : c`
      <span
        class="swim-icon__stack"
        role="${t ? "img" : "presentation"}"
        aria-label="${t ? this.alt : u}"
        aria-hidden="${t ? "false" : "true"}"
      >
        ${e.map(
      (n, l) => c`<i part="icon icon-${l}" class="swim-icon__i swim-icon__i--${l} ${n}${s}"></i>`
    )}
      </span>
    `;
  }
};
bi.styles = [y, tr];
let Se = bi;
ft([
  a({ type: String, attribute: "font-icon" })
], Se.prototype, "fontIcon");
ft([
  a({ type: String })
], Se.prototype, "alt");
ft([
  a({ type: String, attribute: "font-set" })
], Se.prototype, "fontSet");
ft([
  a({ type: String, attribute: "icon-class" })
], Se.prototype, "iconClass");
ft([
  b()
], Se.prototype, "_cssClasses");
customElements.get(es) || customElements.define(es, Se);
var nr = Object.defineProperty, ar = Object.getOwnPropertyDescriptor, de = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? ar(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && nr(e, t, s), s;
};
const ts = "swim-button", gi = class gi extends _ {
  constructor() {
    super(...arguments), this.variant = "default", this.size = "medium", this._disabled = !1, this._state = Y.Active, this.type = "button", this._inProgress = !1, this._success = !1, this._fail = !1;
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    this._disabled = p(e);
  }
  get state() {
    return this._state;
  }
  set state(e) {
    this._state = e, this._updateStateFlags();
  }
  get timeout() {
    return this._timeout === void 0 ? 3e3 : this._timeout;
  }
  set timeout(e) {
    this._timeout = S(e);
  }
  get promise() {
    return this._promise;
  }
  set promise(e) {
    this._promise = e, this._handlePromise();
  }
  connectedCallback() {
    super.connectedCallback(), this._updateState();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._clearTimer();
  }
  render() {
    return c`
      <button part="button" type="${this.type}" ?disabled="${this.disabled}" @click="${this._handleClick}">
        <span class="content">
          <slot></slot>
        </span>
        <span class="state-icon">${this._renderStateIcon()}</span>
      </button>
    `;
  }
  _renderStateIcon() {
    return this._inProgress ? c`<swim-icon class="state-icon" font-icon="loading"></swim-icon>` : this._success ? c`<swim-icon class="state-icon" font-icon="check"></swim-icon>` : this._fail ? c`<swim-icon class="state-icon" font-icon="x"></swim-icon>` : u;
  }
  _handleClick(e) {
    if (this.disabled) {
      e.stopPropagation(), e.preventDefault();
      return;
    }
  }
  _updateStateFlags() {
    this._inProgress = this._state === Y.InProgress, this._success = this._state === Y.Success, this._fail = this._state === Y.Fail;
  }
  _updateState() {
    this._state || (this.state = Y.Active), this.timeout && (this._state === Y.Success || this._state === Y.Fail || this._state === Y.InProgress) && (this._clearTimer(), this._timer = window.setTimeout(() => {
      this.state = Y.Active, this._updateState();
    }, this.timeout));
  }
  _handlePromise() {
    this._promise && (this.state = Y.InProgress, this._promise.then(() => {
      this.state = Y.Success, this._updateState();
    }).catch(() => {
      this.state = Y.Fail, this._updateState();
    }));
  }
  _clearTimer() {
    this._timer !== void 0 && (clearTimeout(this._timer), this._timer = void 0);
  }
};
gi.styles = [y, Zo];
let U = gi;
de([
  a({ type: String, reflect: !0 })
], U.prototype, "variant", 2);
de([
  a({ type: String, reflect: !0 })
], U.prototype, "size", 2);
de([
  a({ type: Boolean, reflect: !0 })
], U.prototype, "disabled", 1);
de([
  a({ type: String, reflect: !0 })
], U.prototype, "state", 1);
de([
  a({ type: String })
], U.prototype, "type", 2);
de([
  a({ type: Number })
], U.prototype, "timeout", 1);
de([
  a({ attribute: !1 })
], U.prototype, "promise", 1);
de([
  b()
], U.prototype, "_inProgress", 2);
de([
  b()
], U.prototype, "_success", 2);
de([
  b()
], U.prototype, "_fail", 2);
customElements.get(ts) || customElements.define(ts, U);
const lr = f`
  :host {
    display: inline-flex;
    position: relative;
    box-sizing: border-box;

    /* Default colors - slotted buttons inherit via --button-* (swim-button uses these with fallbacks) */
    --button-bg: var(--grey-600);
    --button-border: var(--grey-600);
    --button-text: var(--white);
    --button-hover: var(--grey-700);
  }

  :host([button-group-style='primary']) {
    --button-bg: var(--blue-400);
    --button-border: var(--blue-400);
    --button-text: var(--white);
    --button-hover: var(--blue-500);
  }

  /* Contained group: slotted buttons use group colors and no individual shadow */
  :host([variant='contained']) {
    --button-shadow: none;
  }

  /* Horizontal: align items */
  :host([orientation='horizontal']) {
    align-items: center;
  }

  /* Vertical: column layout */
  :host([orientation='vertical']) {
    flex-direction: column;
    align-items: stretch;
  }

  /* Contained variant: unify slotted button appearance and remove radius between items */
  :host([variant='contained'][orientation='horizontal']) ::slotted(swim-button),
  :host([variant='contained'][orientation='horizontal']) ::slotted(button) {
    max-height: 30px;
  }

  :host([variant='contained'][orientation='horizontal']) ::slotted(swim-button:first-child),
  :host([variant='contained'][orientation='horizontal']) ::slotted(button:first-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host([variant='contained'][orientation='horizontal']) ::slotted(swim-button:last-child),
  :host([variant='contained'][orientation='horizontal']) ::slotted(button:last-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  :host([variant='contained'][orientation='horizontal']) ::slotted(swim-button:not(:first-child):not(:last-child)),
  :host([variant='contained'][orientation='horizontal']) ::slotted(button:not(:first-child):not(:last-child)) {
    border-radius: 0;
  }

  :host([variant='contained'][orientation='horizontal']) ::slotted(swim-button:not(:first-child)),
  :host([variant='contained'][orientation='horizontal']) ::slotted(button:not(:first-child)) {
    border-left: 0;
  }

  :host([variant='contained'][orientation='horizontal']) ::slotted(swim-button:not(:last-child)),
  :host([variant='contained'][orientation='horizontal']) ::slotted(button:not(:last-child)) {
    margin-right: 1px;
  }

  /* Vertical contained */
  :host([variant='contained'][orientation='vertical']) ::slotted(swim-button:first-child),
  :host([variant='contained'][orientation='vertical']) ::slotted(button:first-child) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host([variant='contained'][orientation='vertical']) ::slotted(swim-button:last-child),
  :host([variant='contained'][orientation='vertical']) ::slotted(button:last-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  :host([variant='contained'][orientation='vertical']) ::slotted(swim-button:not(:first-child):not(:last-child)),
  :host([variant='contained'][orientation='vertical']) ::slotted(button:not(:first-child):not(:last-child)) {
    border-radius: 0;
  }

  :host([variant='contained'][orientation='vertical']) ::slotted(swim-button:not(:first-child)),
  :host([variant='contained'][orientation='vertical']) ::slotted(button:not(:first-child)) {
    border-top: 0;
  }

  :host([variant='contained'][orientation='vertical']) ::slotted(swim-button:not(:last-child)),
  :host([variant='contained'][orientation='vertical']) ::slotted(button:not(:last-child)) {
    margin-bottom: 1px;
  }

  /* Text variant: divider between items */
  :host([variant='text'][orientation='horizontal']) ::slotted(swim-button:not(:last-child)),
  :host([variant='text'][orientation='horizontal']) ::slotted(button:not(:last-child)) {
    border-right: 1px solid var(--white);
  }

  :host([variant='text'][orientation='vertical']) ::slotted(swim-button:not(:last-child)),
  :host([variant='text'][orientation='vertical']) ::slotted(button:not(:last-child)) {
    border-bottom: 1px solid var(--white);
  }
`;
var uo = /* @__PURE__ */ ((o) => (o.Horizontal = "horizontal", o.Vertical = "vertical", o))(uo || {}), po = /* @__PURE__ */ ((o) => (o.Contained = "contained", o.Text = "text", o))(po || {}), mo = /* @__PURE__ */ ((o) => (o.Default = "default", o.Primary = "primary", o))(mo || {}), cr = Object.defineProperty, ai = (o, e, t, i) => {
  for (var s = void 0, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = n(e, t, s) || s);
  return s && cr(e, t, s), s;
};
const is = "swim-button-group", fi = class fi extends _ {
  constructor() {
    super(...arguments), this.orientation = uo.Horizontal, this.variant = po.Contained, this.buttonGroupStyle = mo.Default;
  }
  render() {
    return c`<slot></slot>`;
  }
};
fi.styles = [y, lr];
let Ge = fi;
ai([
  a({ type: String, reflect: !0 })
], Ge.prototype, "orientation");
ai([
  a({ type: String, reflect: !0 })
], Ge.prototype, "variant");
ai([
  a({ attribute: "button-group-style", type: String, reflect: !0 })
], Ge.prototype, "buttonGroupStyle");
customElements.get(is) || customElements.define(is, Ge);
const dr = f`
  :host {
    display: inline-block;
    cursor: pointer;
  }

  :host([disabled]) {
    pointer-events: none;
    cursor: default;
  }

  .swim-button-toggle {
    position: relative;
    z-index: 3;
    padding: 1px 10px;
    border-radius: var(--radius-4);
    color: var(--grey-350);
    white-space: nowrap;
    transition: background-color 0.25s cubic-bezier(0.35, 0, 0.25, 1), font-weight 0.25s ease-in;
    font: inherit;
    font-size: var(--font-size-m);
    cursor: inherit;
    border: none;
    background: transparent;
    width: 100%;
    text-align: inherit;
  }

  .swim-button-toggle.swim-button-toggle--checked {
    font-weight: var(--font-weight-semibold);
    color: var(--grey-050);
    background-color: var(--grey-700);
  }

  :host(:not([disabled])) .swim-button-toggle:hover:not(.swim-button-toggle--checked) {
    background: rgba(var(--grey-650-rgb), 0.1);
  }

  .swim-button-toggle:focus {
    outline: none;
  }

  .swim-button-toggle:focus-visible {
    outline: 2px solid var(--grey-500);
  }

  .swim-button-toggle__content {
    display: block;
  }
`;
var hr = Object.defineProperty, ur = Object.getOwnPropertyDescriptor, Qe = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? ur(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && hr(e, t, s), s;
};
let pr = 0;
const ss = "swim-button-toggle", _i = class _i extends _ {
  constructor() {
    super(...arguments), this._uniqueId = `swim-button-toggle-${++pr}`, this.name = this._uniqueId, this.value = !1, this._checked = !1, this._disabled = !1;
  }
  get id() {
    return this._id ?? this._uniqueId;
  }
  set id(e) {
    this._id = e;
  }
  get checked() {
    return this._checked;
  }
  set checked(e) {
    const t = p(e);
    this._checked !== t && (this._checked = t, this.requestUpdate("checked"));
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    this._disabled = p(e);
  }
  render() {
    return c`
      <button
        type="button"
        class="swim-button-toggle ${this._checked ? "swim-button-toggle--checked" : ""}"
        id="${this.id}"
        ?disabled="${this.disabled}"
        aria-pressed="${this._checked}"
        aria-disabled="${this.disabled ? "true" : "false"}"
        @click="${this._handleClick}"
      >
        <span class="swim-button-toggle__content">
          <slot></slot>
        </span>
      </button>
    `;
  }
  _handleClick(e) {
    e.preventDefault(), e.stopPropagation(), !(this.disabled || this.checked) && (this._checked = !0, this.dispatchEvent(
      new CustomEvent("value-change", {
        detail: this.value,
        bubbles: !0,
        composed: !0
      })
    ));
  }
};
_i.styles = [y, dr];
let ve = _i;
Qe([
  a({ type: String })
], ve.prototype, "id", 1);
Qe([
  a({ type: String })
], ve.prototype, "name", 2);
Qe([
  a()
], ve.prototype, "value", 2);
Qe([
  a({ type: Boolean, reflect: !0 })
], ve.prototype, "checked", 1);
Qe([
  b()
], ve.prototype, "_checked", 2);
Qe([
  a({ type: Boolean, reflect: !0 })
], ve.prototype, "disabled", 1);
customElements.get(ss) || customElements.define(ss, ve);
const mr = f`
  :host {
    display: inline-flex;
    transition: all 0.25s ease;
  }

  :host([role='group']) {
    /* Expose group semantics */
  }

  .swim-button-toggle-group__container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .swim-button-toggle-group__container__label {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-xs);
    line-height: 12px;
    color: var(--grey-350);
  }

  .swim-button-toggle-group__container__toggle-buttons {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid var(--grey-600);
    border-radius: var(--radius-4);
    padding: var(--spacing-2);
    gap: var(--spacing-2);
  }

  .swim-button-toggle-group__container__toggle-buttons__animation-holder {
    position: absolute;
    top: 0;
    margin: var(--spacing-2);
    height: calc(100% - 4px);
    border-radius: var(--radius-2);
    background-color: var(--grey-700);
    transition: all 0.25s cubic-bezier(0.35, 0, 0.25, 1);
    pointer-events: none;
  }

  :host([disabled]) .swim-button-toggle-group__container__toggle-buttons__animation-holder {
    display: none;
  }
`;
var br = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, qe = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? gr(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && br(e, t, s), s;
};
let fr = 0;
const os = "swim-button-toggle-group", Dt = class Dt extends _ {
  constructor() {
    var e;
    super(), this._uniqueId = `swim-button-toggle-group-${++fr}`, this._animationHolderLeft = 0, this._animationHolderWidth = 0, this.label = "", this._value = void 0, this._disabled = !1, this._slotChangeBound = () => this._onSlotChange(), this._slotForCleanup = null, this._internals = ((e = this.attachInternals) == null ? void 0 : e.call(this)) ?? {}, this.setAttribute("role", "group"), this._boundValueChange = this._onValueChangeEvent.bind(this);
  }
  get id() {
    return this._id ?? this._uniqueId;
  }
  set id(e) {
    this._id = e;
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this._value !== e && (this._value = e, this._internals.setFormValue(e != null ? String(e) : ""), this._syncSelection());
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    this._disabled = p(e), this._syncDisabled();
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("value-change", this._boundValueChange), this._internals.setFormValue && this._internals.setFormValue(this._value != null ? String(this._value) : "");
  }
  disconnectedCallback() {
    this._slotForCleanup && (this._slotForCleanup.removeEventListener("slotchange", this._slotChangeBound), this._slotForCleanup = null), this.removeEventListener("value-change", this._boundValueChange), super.disconnectedCallback();
  }
  firstUpdated(e) {
    super.firstUpdated(e);
    const t = this._slot;
    t && (this._slotForCleanup = t, t.addEventListener("slotchange", this._slotChangeBound)), this._onSlotChange();
  }
  updated(e) {
    super.updated(e), (e.has("value") || e.has("disabled")) && (this._syncSelection(), this._syncDisabled());
  }
  _getToggles() {
    const e = this._slot;
    return e ? e.assignedElements({ flatten: !0 }).filter(
      (i) => i instanceof HTMLElement && i.tagName === "SWIM-BUTTON-TOGGLE"
    ) : [];
  }
  _onSlotChange() {
    this._syncSelection(), this._syncDisabled(), requestAnimationFrame(() => this._calcAnimationDimensions());
  }
  _syncSelection() {
    const e = this._getToggles(), t = this._value;
    e.forEach((i) => {
      i.checked = i.value !== void 0 && i.value === t;
    }), requestAnimationFrame(() => this._calcAnimationDimensions());
  }
  _syncDisabled() {
    this._getToggles().forEach((t) => {
      t.disabled = this._disabled;
    });
  }
  _calcAnimationDimensions() {
    const e = this._getToggles();
    if (!e.length || this._disabled) {
      this._animationHolderLeft = 0, this._animationHolderWidth = 0;
      return;
    }
    const t = e.findIndex((l) => l.value !== void 0 && l.value === this._value);
    if (t < 0) {
      this._animationHolderLeft = 0, this._animationHolderWidth = 0;
      return;
    }
    let i = 0;
    for (let l = 0; l < t; l++)
      i += e[l].offsetWidth ?? 0;
    i += t * 2 + 2;
    const r = e[t], n = Math.max(0, ((r == null ? void 0 : r.offsetWidth) ?? 0) - 4);
    this._animationHolderLeft = i, this._animationHolderWidth = n;
  }
  _onValueChangeEvent(e) {
    const i = e.detail;
    this._value !== i && (this._value = i, this._internals.setFormValue(i != null ? String(i) : ""), this._syncSelection(), this.dispatchEvent(
      new CustomEvent("value-change", {
        detail: i,
        bubbles: !0,
        composed: !0
      })
    ));
  }
  render() {
    return c`
      <div class="swim-button-toggle-group__container" id="${this.id}">
        ${this.label ? c`<label class="swim-button-toggle-group__container__label" for="${this.id}-toggles"
              >${this.label}</label
            >` : ""}
        <div
          class="swim-button-toggle-group__container__toggle-buttons"
          id="${this.id}-toggles"
          role="group"
          aria-label="${this.label || "Toggle group"}"
        >
          <div
            class="swim-button-toggle-group__container__toggle-buttons__animation-holder"
            style="left: ${this._animationHolderLeft}px; width: ${this._animationHolderWidth}px;"
          ></div>
          <slot></slot>
        </div>
      </div>
    `;
  }
};
Dt.styles = [y, mr], Dt.formAssociated = !0;
let ne = Dt;
qe([
  q("slot")
], ne.prototype, "_slot", 2);
qe([
  b()
], ne.prototype, "_animationHolderLeft", 2);
qe([
  b()
], ne.prototype, "_animationHolderWidth", 2);
qe([
  a({ type: String })
], ne.prototype, "id", 1);
qe([
  a({ type: String })
], ne.prototype, "label", 2);
qe([
  a()
], ne.prototype, "value", 1);
qe([
  a({ type: Boolean, reflect: !0 })
], ne.prototype, "disabled", 1);
customElements.get(os) || customElements.define(os, ne);
const _r = f`
  :host {
    position: relative;
    font-size: var(--font-size-m);
    background: var(--grey-800);
    display: inline-block;
    border: 1px solid var(--grey-700);
    width: 270px;
    padding: 0.5rem 0;
    border-radius: var(--radius-6);
    box-sizing: border-box;
    color: var(--grey-050);
  }

  :host(:focus) {
    outline: none;
  }

  /* ------------------------------------------------------------------ */
  /* Title row (navigation)                                              */
  /* ------------------------------------------------------------------ */

  .title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--grey-800);
    color: var(--grey-050);
    padding: 0.69rem 0;
    font-weight: var(--font-weight-semibold);
    line-height: 1;
  }

  .title-row .title {
    color: var(--blue-400);
    min-width: 100px;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: var(--radius-4);
    background: none;
    border: none;
    font: inherit;
    font-weight: var(--font-weight-semibold);
    font-size: inherit;
  }

  .title-row .title:hover {
    background: var(--grey-750);
  }

  .title-row .prev-month,
  .title-row .next-month {
    color: var(--grey-350);
    font-size: var(--font-size-xxs);
    border-radius: var(--radius-4);
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 8px;
    line-height: 1;
  }

  .title-row .prev-month:hover,
  .title-row .next-month:hover {
    color: var(--grey-050);
  }

  .title-row .prev-month:disabled,
  .title-row .next-month:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  button {
    outline: 0px var(--blue-200);
  }

  button:focus-visible {
    outline: 2px solid var(--blue-200);
    outline-offset: 1px;
  }

  /* ------------------------------------------------------------------ */
  /* Day names row                                                       */
  /* ------------------------------------------------------------------ */

  .day-name-row {
    color: var(--grey-350);
    font-weight: var(--font-weight-semibold);
    display: flex;
  }

  .day-name {
    flex: 1 0 30px;
    margin: 0.1rem 0.2rem;
    line-height: 1.8rem;
    text-align: center;
    width: 1.8rem;
    height: 1.8rem;
  }

  /* ------------------------------------------------------------------ */
  /* Day grid                                                            */
  /* ------------------------------------------------------------------ */

  .day-container {
    margin-top: 0;
    width: 100%;
    border-collapse: collapse;
  }

  .day-row {
    display: flex;
  }

  .day-cell {
    flex: 1 0 30px;
    margin: 0.1rem 0.2rem;
    line-height: 1.8rem;
    text-align: center;
    width: 1.8rem;
    height: 1.8rem;
    padding: 0;
  }

  .day {
    color: var(--grey-050);
    height: 100%;
    width: 100%;
    max-height: 30px;
    max-width: 30px;
    line-height: 1.8rem;
    border-radius: 50%;
    text-align: center;
    transition: background 200ms;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
    font-size: inherit;
  }

  .day.prev-month,
  .day.next-month {
    color: var(--grey-350);
    opacity: 0.2;
  }

  .day.today {
    background: var(--grey-750);
  }

  .day.active {
    background: var(--blue-400);
    color: var(--grey-050);
  }

  .day:hover:not(.active):not([disabled]) {
    background: var(--blue-400);
    color: var(--grey-050);
    opacity: 1;
  }

  .day:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .day.focus:not([disabled]) {
    outline: 2px solid var(--blue-200);
    outline-offset: 1px;
  }

  /* ------------------------------------------------------------------ */
  /* Month grid                                                          */
  /* ------------------------------------------------------------------ */

  .months-container {
    margin: 0.5rem;
    color: var(--grey-050);
    width: calc(100% - 1rem);
    border-collapse: collapse;
  }

  .months-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid var(--grey-700);
  }

  .month-cell {
    padding: 0;
    border: 1px solid var(--grey-700);
  }

  .month {
    grid-auto-rows: auto;
    text-transform: uppercase;
    text-align: center;
    font-size: var(--font-size-s);
    width: 100%;
    padding: 0.75rem;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    font-size: var(--font-size-s);
    text-transform: uppercase;
  }

  .month.active {
    background-color: var(--blue-400);
  }

  .month.current:not(.active) {
    background-color: var(--grey-750);
  }

  .month:hover:not(.active):not([disabled]) {
    background: var(--blue-400);
    color: var(--grey-050);
    opacity: 1;
  }

  .month:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  /* ------------------------------------------------------------------ */
  /* Year grid                                                           */
  /* ------------------------------------------------------------------ */

  .years-container {
    margin: 0.5rem;
    color: var(--grey-050);
    width: calc(100% - 1rem);
    border-collapse: collapse;
  }

  .years-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 1px solid var(--grey-700);
  }

  .year-cell {
    padding: 0;
    border: 1px solid var(--grey-700);
  }

  .year {
    grid-auto-rows: auto;
    text-transform: uppercase;
    text-align: center;
    font-size: var(--font-size-s);
    width: 100%;
    padding: 0.475rem;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    font-size: var(--font-size-s);
  }

  .year.active {
    background-color: var(--blue-400);
  }

  .year.current:not(.active) {
    background-color: var(--grey-750);
  }

  .year:hover:not(.active):not([disabled]) {
    background: var(--blue-400);
    color: var(--grey-050);
    opacity: 1;
  }

  .year:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`, wr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], vr = ["S", "M", "T", "W", "T", "F", "S"];
function Qt(o, e) {
  return o.getFullYear() === e.getFullYear() && o.getMonth() === e.getMonth() && o.getDate() === e.getDate();
}
function cl(o, e) {
  return o.getFullYear() === e.getFullYear() && o.getMonth() === e.getMonth();
}
function yr(o, e) {
  return o.getFullYear() === e.getFullYear();
}
function rs(o, e) {
  return new Date(o, e + 1, 0).getDate();
}
function Gt(o, e, t) {
  return {
    num: o.getDate(),
    dayOfWeek: o.getDay(),
    date: new Date(o),
    today: Qt(o, t),
    prevMonth: o.getMonth() < e || o.getMonth() === 11 && e === 0,
    nextMonth: o.getMonth() > e || o.getMonth() === 0 && e === 11
  };
}
function ie(o) {
  const e = /* @__PURE__ */ new Date(), t = o.getFullYear(), i = o.getMonth(), s = rs(t, i), r = new Date(t, i, 1).getDay(), n = [];
  if (r > 0) {
    const h = rs(t, i - 1);
    for (let w = r - 1; w >= 0; w--) {
      const m = new Date(t, i - 1, h - w);
      n.push(Gt(m, i, e));
    }
  }
  for (let h = 1; h <= s; h++)
    n.push(Gt(new Date(t, i, h), i, e));
  const l = n.length % 7;
  if (l > 0) {
    const h = 7 - l;
    for (let w = 1; w <= h; w++)
      n.push(Gt(new Date(t, i + 1, w), i, e));
  }
  const d = [];
  for (let h = 0; h < n.length; h += 7)
    d.push(n.slice(h, h + 7));
  return d;
}
function ns(o) {
  return Math.floor(o / 20) * 20;
}
function Jt(o, e, t = "day") {
  if (!e) return !1;
  switch (t) {
    case "year":
      return o.getFullYear() < e.getFullYear();
    case "month":
      return o.getFullYear() < e.getFullYear() || o.getFullYear() === e.getFullYear() && o.getMonth() < e.getMonth();
    default:
      return new Date(o.getFullYear(), o.getMonth(), o.getDate()) < new Date(e.getFullYear(), e.getMonth(), e.getDate());
  }
}
function Kt(o, e, t = "day") {
  if (!e) return !1;
  switch (t) {
    case "year":
      return o.getFullYear() > e.getFullYear();
    case "month":
      return o.getFullYear() > e.getFullYear() || o.getFullYear() === e.getFullYear() && o.getMonth() > e.getMonth();
    default:
      return new Date(o.getFullYear(), o.getMonth(), o.getDate()) > new Date(e.getFullYear(), e.getMonth(), e.getDate());
  }
}
var D = /* @__PURE__ */ ((o) => (o.date = "date", o.time = "time", o.datetime = "datetime", o))(D || {}), se = /* @__PURE__ */ ((o) => (o.HUMAN = "human", o.TIMEZONE = "timezone", o.LOCAL = "local", o.CUSTOM = "custom", o))(se || {});
const xr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], kr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], Cr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Ar = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], as = {
  L: "MM/DD/YYYY",
  l: "M/D/YYYY",
  LL: "MMMM D, YYYY",
  ll: "MMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  lll: "MMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A",
  llll: "ddd, MMM D, YYYY h:mm A",
  LT: "h:mm A",
  LTS: "h:mm:ss A"
}, C = {
  shortDate: "l",
  shortTime: "LT",
  shortDateTime: "l LT",
  shortDateTimeSeconds: "l LTS",
  date: "ll",
  time: "LT",
  dateTime: "lll",
  dateTimeSeconds: "ll LTS",
  dateMonth: "MMM YYYY",
  dateYear: "YYYY",
  fullDate: "ddd, ll Z [(]zz[)]",
  fullTime: "LT Z [(]zz[)]",
  fullDateTime: "llll Z [(]zz[)]",
  fullDateMonth: "MMM YYYY Z [(]zz[)]",
  fullDateYear: "YYYY Z [(]zz[)]",
  localeDate: "L",
  localeDateTime: "L LT",
  localeTime: "LT",
  timezoneDate: "L Z",
  timezoneDateTime: "L LT Z",
  timezoneDateTimeSeconds: "L LTS Z",
  timezoneTime: "LT Z",
  timezoneDateMonth: "MMM YYYY Z",
  timezoneDateYear: "YYYY Z",
  locale: "LLL",
  shortLocale: "LL",
  fullLocale: "LLLL"
};
function H(o, e = 2) {
  return String(o).padStart(e, "0");
}
function bo(o, e) {
  if (!e)
    return {
      year: o.getFullYear(),
      month: o.getMonth(),
      day: o.getDate(),
      hour: o.getHours(),
      minute: o.getMinutes(),
      second: o.getSeconds(),
      ms: o.getMilliseconds(),
      dow: o.getDay()
    };
  try {
    const i = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: !1
    }).formatToParts(o), s = (n) => {
      var l;
      return ((l = i.find((d) => d.type === n)) == null ? void 0 : l.value) ?? "";
    }, r = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return {
      year: parseInt(s("year"), 10),
      month: parseInt(s("month"), 10) - 1,
      day: parseInt(s("day"), 10),
      hour: parseInt(s("hour"), 10) % 24,
      minute: parseInt(s("minute"), 10),
      second: parseInt(s("second"), 10),
      ms: o.getMilliseconds(),
      dow: r[s("weekday")] ?? 0
    };
  } catch {
    return bo(o);
  }
}
function ls(o, e) {
  if (!e) {
    const t = -o.getTimezoneOffset();
    return cs(t);
  }
  try {
    const t = o.toLocaleString("en-US", { timeZone: "UTC" }), i = o.toLocaleString("en-US", { timeZone: e }), s = new Date(i).getTime() - new Date(t).getTime(), r = Math.round(s / 6e4);
    return cs(r);
  } catch {
    return "+00:00";
  }
}
function cs(o) {
  const e = o >= 0 ? "+" : "-", t = Math.abs(o);
  return `${e}${H(Math.floor(t / 60))}:${H(t % 60)}`;
}
function Er(o, e) {
  var t;
  try {
    return ((t = new Intl.DateTimeFormat("en-US", {
      timeZone: e || void 0,
      timeZoneName: "short"
    }).formatToParts(o).find((s) => s.type === "timeZoneName")) == null ? void 0 : t.value) ?? "";
  } catch {
    return "";
  }
}
function zr(o) {
  const e = ["LLLL", "llll", "LLL", "lll", "LTS", "LL", "ll", "LT", "L", "l"];
  let t = o;
  for (const i of e)
    as[i] && (t = t.split(i).join(as[i]));
  return t;
}
const Sr = /(MMMM|YYYY|dddd|MMM|ddd|SSS|MM|DD|HH|hh|mm|ss|YY|ZZ|zz|M|D|H|h|A|a|Z|z)/g;
function Ir(o, e, t, i) {
  switch (o) {
    case "YYYY":
      return String(e.year);
    case "YY":
      return String(e.year).slice(-2);
    case "MMMM":
      return kr[e.month];
    case "MMM":
      return xr[e.month];
    case "MM":
      return H(e.month + 1);
    case "M":
      return String(e.month + 1);
    case "DD":
      return H(e.day);
    case "D":
      return String(e.day);
    case "dddd":
      return Ar[e.dow];
    case "ddd":
      return Cr[e.dow];
    case "HH":
      return H(e.hour);
    case "H":
      return String(e.hour);
    case "hh":
      return H(e.hour % 12 || 12);
    case "h":
      return String(e.hour % 12 || 12);
    case "mm":
      return H(e.minute);
    case "ss":
      return H(e.second);
    case "SSS":
      return H(e.ms, 3);
    case "A":
      return e.hour >= 12 ? "PM" : "AM";
    case "a":
      return e.hour >= 12 ? "pm" : "am";
    case "Z":
      return ls(t, i);
    case "ZZ":
      return ls(t, i).replace(":", "");
    case "zz":
    case "z":
      return Er(t, i);
    default:
      return o;
  }
}
function Dr(o) {
  return C[o] || o;
}
function st(o, e, t) {
  const i = Zt(t);
  let s = zr(e);
  const r = [];
  s = s.replace(/\[([^\]]*)\]/g, (d, h) => (r.push(h), `\0${r.length - 1}\0`));
  const n = bo(o, i);
  return s.replace(Sr, (d) => Ir(d, n, o, i)).replace(/\x00(\d+)\x00/g, (d, h) => r[parseInt(h, 10)]);
}
function Je(o) {
  if (o instanceof Date) return B(o) ? o : null;
  if (!o || typeof o != "string") return null;
  const e = o.trim();
  if (!e) return null;
  const t = new Date(e);
  if (B(t)) return t;
  const i = e.match(/^(\d{1,2})\/(\d{4})$/);
  if (i) {
    const n = new Date(parseInt(i[2], 10), parseInt(i[1], 10) - 1, 1);
    if (B(n)) return n;
  }
  const s = e.match(/^(\d{4})$/);
  if (s) {
    const n = new Date(parseInt(s[1], 10), 0, 1);
    if (B(n)) return n;
  }
  const r = e.match(/^(\w{3,})\s+(\d{4})$/);
  if (r) {
    const n = /* @__PURE__ */ new Date(`${r[1]} 1, ${r[2]}`);
    if (B(n)) return n;
  }
  return null;
}
function B(o) {
  return o instanceof Date && !isNaN(o.getTime());
}
function ds(o, e) {
  if (!e || !B(o)) return o;
  const t = new Date(o), i = [
    ["millisecond", () => {
    }],
    ["second", () => t.setMilliseconds(0)],
    [
      "minute",
      () => {
        t.setMilliseconds(0), t.setSeconds(0);
      }
    ],
    [
      "hour",
      () => {
        t.setMilliseconds(0), t.setSeconds(0), t.setMinutes(0);
      }
    ],
    [
      "date",
      () => {
        t.setMilliseconds(0), t.setSeconds(0), t.setMinutes(0), t.setHours(0);
      }
    ],
    [
      "month",
      () => {
        t.setMilliseconds(0), t.setSeconds(0), t.setMinutes(0), t.setHours(0), t.setDate(1);
      }
    ],
    [
      "year",
      () => {
        t.setMilliseconds(0), t.setSeconds(0), t.setMinutes(0), t.setHours(0), t.setDate(1), t.setMonth(0);
      }
    ]
  ], s = i.findIndex(([r]) => r === e);
  return s >= 0 && i[s][1](), t;
}
function Mr(o, e, t) {
  switch (o) {
    case se.HUMAN:
    case se.TIMEZONE:
      switch (e) {
        case D.date:
          return t === "month" ? C.timezoneDateMonth : t === "year" ? C.timezoneDateYear : C.timezoneDate;
        case D.time:
          return C.timezoneTime;
        default:
          return C.timezoneDateTime;
      }
    case se.LOCAL:
      switch (e) {
        case D.date:
          return t === "month" ? C.dateMonth : t === "year" ? C.dateYear : C.localeDate;
        case D.time:
          return C.localeTime;
        default:
          return C.localeDateTime;
      }
    case se.CUSTOM:
      switch (e) {
        case D.date:
          return t === "month" ? C.dateMonth : t === "year" ? C.dateYear : C.date;
        case D.time:
          return C.time;
        default:
          return C.dateTime;
      }
    default:
      return C.localeDate;
  }
}
function dl(o, e, t) {
  switch (o) {
    case se.HUMAN:
    case se.TIMEZONE:
      switch (e) {
        case D.date:
          return t === "month" ? C.fullDateMonth : t === "year" ? C.fullDateYear : C.fullDate;
        case D.time:
          return C.fullTime;
        default:
          return C.fullDateTime;
      }
    case se.LOCAL:
      switch (e) {
        case D.date:
          return t === "month" ? C.dateMonth : t === "year" ? C.dateYear : C.localeDate;
        case D.time:
          return C.localeTime;
        default:
          return C.localeDateTime;
      }
    case se.CUSTOM:
      switch (e) {
        case D.date:
          return t === "month" ? C.dateMonth : t === "year" ? C.dateYear : C.date;
        case D.time:
          return C.time;
        default:
          return C.dateTime;
      }
    default:
      return C.localeDate;
  }
}
function Zt(o) {
  if (o)
    return o.toLowerCase() === "utc" ? "UTC" : o;
}
function hl(o, e) {
  if (!o || !B(o)) return "";
  const t = o.getFullYear(), i = H(o.getMonth() + 1), s = H(o.getDate()), r = H(o.getHours()), n = H(o.getMinutes()), l = H(o.getSeconds());
  switch (e) {
    case "time":
      return `${r}:${n}:${l}`;
    case "datetime":
    case "datetime-local":
      return `${t}-${i}-${s}T${r}:${n}:${l}`;
    case "month":
      return `${t}-${i}`;
    default:
      return `${t}-${i}-${s}`;
  }
}
function hs(o, e, t) {
  if (!B(o)) return !1;
  const i = e ? Je(e) : null, s = t ? Je(t) : null;
  return !!(i && B(i) && o < i || s && B(s) && o > s);
}
var Tr = Object.defineProperty, Or = Object.getOwnPropertyDescriptor, he = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Or(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && Tr(e, t, s), s;
};
const us = "swim-calendar", wi = class wi extends _ {
  constructor() {
    super(...arguments), this._value = null, this.disabled = !1, this._currentView = "date", this._focusDate = /* @__PURE__ */ new Date(), this._weeks = [], this._startYear = 0, this._currentDate = /* @__PURE__ */ new Date(), this._onDayKeyDown = (e) => {
      let t = !1;
      switch (e.code) {
        case "ArrowDown":
          this._moveFocus(1, "week"), t = !0;
          break;
        case "ArrowUp":
          this._moveFocus(-1, "week"), t = !0;
          break;
        case "ArrowLeft":
          this._moveFocus(-1, "day"), t = !0;
          break;
        case "ArrowRight":
          this._moveFocus(1, "day"), t = !0;
          break;
        case "PageUp":
          this._moveFocus(-1, e.altKey ? "year" : "month"), t = !0;
          break;
        case "PageDown":
          this._moveFocus(1, e.altKey ? "year" : "month"), t = !0;
          break;
        case "Home": {
          const i = new Date(this._focusDate);
          e.altKey ? i.setDate(1) : i.setDate(i.getDate() - i.getDay()), this._focusDate = i, this._weeks = ie(this._focusDate), this.requestUpdate(), this.updateComplete.then(() => this.focusDay()), t = !0;
          break;
        }
        case "End": {
          const i = new Date(this._focusDate);
          e.altKey ? i.setMonth(i.getMonth() + 1, 0) : i.setDate(i.getDate() + (6 - i.getDay())), this._focusDate = i, this._weeks = ie(this._focusDate), this.requestUpdate(), this.updateComplete.then(() => this.focusDay()), t = !0;
          break;
        }
        case "Enter":
          setTimeout(() => {
            this.dispatchEvent(new CustomEvent("day-key-enter", { bubbles: !0, composed: !0 }));
          }, 200);
          break;
      }
      t && (e.stopPropagation(), e.preventDefault());
    }, this._onMonthKeyDown = (e) => {
      let t = !1;
      switch (e.code) {
        case "ArrowDown":
          this._moveFocus(3, "month"), t = !0;
          break;
        case "ArrowUp":
          this._moveFocus(-3, "month"), t = !0;
          break;
        case "ArrowLeft":
          this._moveFocus(-1, "month"), t = !0;
          break;
        case "ArrowRight":
          this._moveFocus(1, "month"), t = !0;
          break;
        case "PageUp":
          this._moveFocus(-1, "year"), t = !0;
          break;
        case "PageDown":
          this._moveFocus(1, "year"), t = !0;
          break;
        case "Enter":
          setTimeout(() => {
            this.dispatchEvent(new CustomEvent("day-key-enter", { bubbles: !0, composed: !0 }));
          }, 200);
          break;
      }
      t && (e.stopPropagation(), e.preventDefault());
    }, this._onYearKeyDown = (e) => {
      let t = !1;
      switch (e.code) {
        case "ArrowDown":
          this._moveFocus(4, "year"), t = !0;
          break;
        case "ArrowUp":
          this._moveFocus(-4, "year"), t = !0;
          break;
        case "ArrowLeft":
          this._moveFocus(-1, "year"), t = !0;
          break;
        case "ArrowRight":
          this._moveFocus(1, "year"), t = !0;
          break;
        case "PageUp":
          this._moveFocus(-20, "year"), t = !0;
          break;
        case "PageDown":
          this._moveFocus(20, "year"), t = !0;
          break;
        case "Enter":
          setTimeout(() => {
            this.dispatchEvent(new CustomEvent("day-key-enter", { bubbles: !0, composed: !0 }));
          }, 200);
          break;
      }
      t && (e.stopPropagation(), e.preventDefault());
    };
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    e && B(e) ? this._value = new Date(e) : this._value = null, this.requestUpdate("value", t);
  }
  set minView(e) {
    this._minView = e, this._validateView(), this.requestUpdate();
  }
  get minView() {
    return this._minView || "date";
  }
  // today, for highlighting
  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------
  connectedCallback() {
    super.connectedCallback(), this._init();
  }
  updated(e) {
    super.updated(e), e.has("value") && this._value && (this._focusDate = new Date(this._value), this._weeks = ie(this._focusDate), this._startYear = ns(this._focusDate.getFullYear()));
  }
  // ---------------------------------------------------------------------------
  // Public methods
  // ---------------------------------------------------------------------------
  /** Focus the active/focused day button. */
  focusDay() {
    var t;
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector("button.focus");
    e == null || e.focus();
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  render() {
    switch (this._currentView) {
      case "month":
        return this._renderMonthView();
      case "year":
        return this._renderYearView();
      default:
        return this._renderDateView();
    }
  }
  _renderDateView() {
    const e = this._formatMonthYear(this._focusDate);
    return c`
      <div class="text-center">
        <div class="title-row">
          <button
            type="button"
            class="prev-month"
            ?disabled="${this.disabled}"
            title="Previous Month"
            @click="${this._prevMonth}"
          >
            <swim-icon font-icon="arrow-left"></swim-icon>
          </button>
          <button type="button" class="title" @click="${this._changeViews}">${e}</button>
          <button
            type="button"
            class="next-month"
            ?disabled="${this.disabled}"
            title="Next Month"
            @click="${this._nextMonth}"
          >
            <swim-icon font-icon="arrow-right"></swim-icon>
          </button>
        </div>
        <div class="day-name-row">${vr.map((t) => c`<div class="day-name text-center">${t}</div>`)}</div>
        <table class="day-container" role="grid">
          ${this._weeks.map(
      (t) => c`
              <tr class="day-row" role="row">
                ${t.map((i) => {
        if (!i.num)
          return c`<td class="day-cell text-center" role="gridcell"></td>`;
        const s = this._value ? Qt(i.date, this._value) : !1, r = Qt(i.date, this._focusDate), n = this.disabled || this._isDayDisabled(i.date), l = ["day"];
        return i.prevMonth && l.push("prev-month"), i.nextMonth && l.push("next-month"), i.today && l.push("today"), s && l.push("active"), r && !n && l.push("focus"), c`
                    <td class="day-cell text-center" role="gridcell">
                      <button
                        type="button"
                        class="${l.join(" ")}"
                        ?disabled="${n}"
                        tabindex="${r && !n ? 0 : -1}"
                        @click="${() => this._onDayClick(i)}"
                        @keydown="${this._onDayKeyDown}"
                      >
                        ${i.num}
                      </button>
                    </td>
                  `;
      })}
              </tr>
            `
    )}
        </table>
      </div>
    `;
  }
  _renderMonthView() {
    const e = String(this._focusDate.getFullYear());
    return c`
      <div class="text-center">
        <div class="title-row">
          <button
            type="button"
            class="prev-month"
            ?disabled="${this.disabled}"
            title="Previous Year"
            @click="${this._prevYear}"
          >
            <swim-icon font-icon="arrow-left"></swim-icon>
          </button>
          <button type="button" class="title" @click="${this._changeViews}">${e}</button>
          <button
            type="button"
            class="next-month"
            ?disabled="${this.disabled}"
            title="Next Year"
            @click="${this._nextYear}"
          >
            <swim-icon font-icon="arrow-right"></swim-icon>
          </button>
        </div>
        <table class="months-container" role="grid">
          <tr class="months-row" role="row">
            ${wr.map((t, i) => {
      const s = this._isMonthActive(i), r = this._isCurrentMonth(i), n = this._focusDate.getMonth() === i && yr(this._focusDate, this._focusDate), l = this.disabled || this._isMonthDisabled(i), d = ["month"];
      return s && d.push("active"), r && d.push("current"), n && d.push("focus"), c`
                <td class="month-cell text-center" role="gridcell">
                  <button
                    type="button"
                    class="${d.join(" ")}"
                    ?disabled="${l}"
                    tabindex="${n && !l ? 0 : -1}"
                    @click="${() => this._onMonthClick(i)}"
                    @keydown="${this._onMonthKeyDown}"
                  >
                    ${t}
                  </button>
                </td>
              `;
    })}
          </tr>
        </table>
      </div>
    `;
  }
  _renderYearView() {
    const e = Array.from({ length: 20 }, (t, i) => this._startYear + i);
    return c`
      <div class="text-center">
        <div class="title-row">
          <button
            type="button"
            class="prev-month"
            ?disabled="${this.disabled}"
            title="Previous Two Decades"
            @click="${this._prevTwoDecades}"
          >
            <swim-icon font-icon="arrow-left"></swim-icon>
          </button>
          <button type="button" class="title" @click="${this._changeViews}">
            ${this._startYear} - ${this._startYear + 20}
          </button>
          <button
            type="button"
            class="next-month"
            ?disabled="${this.disabled}"
            title="Next Two Decades"
            @click="${this._nextTwoDecades}"
          >
            <swim-icon font-icon="arrow-right"></swim-icon>
          </button>
        </div>
        <table class="years-container" role="grid">
          <tr class="years-row" role="row">
            ${e.map((t) => {
      const i = this._isYearActive(t), s = t === this._currentDate.getFullYear(), r = t === this._focusDate.getFullYear(), n = this.disabled || this._isYearDisabled(t), l = ["year"];
      return i && l.push("active"), s && l.push("current"), r && l.push("focus"), c`
                <td class="year-cell text-center" role="gridcell">
                  <button
                    type="button"
                    class="${l.join(" ")}"
                    ?disabled="${n}"
                    tabindex="${r && !n ? 0 : -1}"
                    @click="${() => this._onYearClick(t)}"
                    @keydown="${this._onYearKeyDown}"
                  >
                    ${t}
                  </button>
                </td>
              `;
    })}
          </tr>
        </table>
      </div>
    `;
  }
  // ---------------------------------------------------------------------------
  // Internal helpers
  // ---------------------------------------------------------------------------
  _init() {
    this._value && (this._focusDate = new Date(this._value)), this._weeks = ie(this._focusDate), this._currentDate = /* @__PURE__ */ new Date(), this._startYear = ns(this._focusDate.getFullYear()), this._validateView();
  }
  _validateView() {
    [
      "date",
      "month",
      "year"
      /* Year */
    ].indexOf(
      this._minView || "date"
      /* Date */
    ) < 0 && (this._minView = "date"), this._currentView = this._minView || "date";
  }
  _formatMonthYear(e) {
    return `${[
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ][e.getMonth()]} ${e.getFullYear()}`;
  }
  _resolveMin() {
    return this.minDate ? this.minDate instanceof Date ? this.minDate : Je(this.minDate) : null;
  }
  _resolveMax() {
    return this.maxDate ? this.maxDate instanceof Date ? this.maxDate : Je(this.maxDate) : null;
  }
  _isDayDisabled(e) {
    return Jt(e, this._resolveMin(), "day") || Kt(e, this._resolveMax(), "day");
  }
  _isMonthDisabled(e) {
    const t = new Date(this._focusDate.getFullYear(), e, 1);
    return Jt(t, this._resolveMin(), "month") || Kt(t, this._resolveMax(), "month");
  }
  _isYearDisabled(e) {
    const t = new Date(e, 0, 1);
    return Jt(t, this._resolveMin(), "year") || Kt(t, this._resolveMax(), "year");
  }
  _isMonthActive(e) {
    return this._value ? this._value.getMonth() === e && this._value.getFullYear() === this._focusDate.getFullYear() : !1;
  }
  _isCurrentMonth(e) {
    return this._currentDate.getMonth() === e && this._currentDate.getFullYear() === this._focusDate.getFullYear();
  }
  _isYearActive(e) {
    return this._value ? this._value.getFullYear() === e : !1;
  }
  // ---------------------------------------------------------------------------
  // Navigation
  // ---------------------------------------------------------------------------
  _prevMonth() {
    const e = new Date(this._focusDate);
    e.setMonth(e.getMonth() - 1), this._focusDate = e, this._weeks = ie(this._focusDate);
  }
  _nextMonth() {
    const e = new Date(this._focusDate);
    e.setMonth(e.getMonth() + 1), this._focusDate = e, this._weeks = ie(this._focusDate);
  }
  _prevYear() {
    const e = new Date(this._focusDate);
    e.setFullYear(e.getFullYear() - 1), this._focusDate = e;
  }
  _nextYear() {
    const e = new Date(this._focusDate);
    e.setFullYear(e.getFullYear() + 1), this._focusDate = e;
  }
  _prevTwoDecades() {
    this._startYear -= 20;
  }
  _nextTwoDecades() {
    this._startYear += 20;
  }
  _changeViews() {
    this._currentView === "date" ? this._currentView = "month" : this._currentView === "month" ? this._currentView = "year" : this._currentView = this._minView || "date", this._weeks = ie(this._focusDate);
  }
  // ---------------------------------------------------------------------------
  // Day interaction
  // ---------------------------------------------------------------------------
  _onDayClick(e) {
    this._focusDate = new Date(e.date), this._value = new Date(e.date), (e.prevMonth || e.nextMonth) && (this._weeks = ie(this._focusDate)), this.requestUpdate(), this.dispatchEvent(new CustomEvent("change", { detail: this._value, bubbles: !0, composed: !0 }));
  }
  _onMonthClick(e) {
    const t = new Date(this._focusDate);
    t.setMonth(e), this._focusDate = t, this._value = new Date(t), (this._minView || "date") !== "month" && (this._currentView = "date", this._weeks = ie(this._focusDate)), this.requestUpdate(), this.dispatchEvent(new CustomEvent("change", { detail: this._value, bubbles: !0, composed: !0 }));
  }
  _onYearClick(e) {
    const t = new Date(this._focusDate);
    t.setFullYear(e), this._focusDate = t, this._value = new Date(t), (this._minView || "date") !== "year" && (this._currentView = "month", this._weeks = ie(this._focusDate)), this.requestUpdate(), this.dispatchEvent(new CustomEvent("change", { detail: this._value, bubbles: !0, composed: !0 }));
  }
  // ---------------------------------------------------------------------------
  // Keyboard navigation
  // ---------------------------------------------------------------------------
  _moveFocus(e, t) {
    const i = new Date(this._focusDate);
    switch (t) {
      case "day":
        i.setDate(i.getDate() + e);
        break;
      case "week":
        i.setDate(i.getDate() + e * 7);
        break;
      case "month":
        i.setMonth(i.getMonth() + e);
        break;
      case "year":
        i.setFullYear(i.getFullYear() + e);
        break;
    }
    this._focusDate = i, this._weeks = ie(this._focusDate), this._focusDate.getFullYear() < this._startYear ? this._prevTwoDecades() : this._focusDate.getFullYear() > this._startYear + 20 && this._nextTwoDecades(), this.requestUpdate(), this.updateComplete.then(() => this.focusDay());
  }
};
wi.styles = [y, _r];
let N = wi;
he([
  a({ attribute: !1 })
], N.prototype, "value", 1);
he([
  a({ attribute: "min-date" })
], N.prototype, "minDate", 2);
he([
  a({ attribute: "max-date" })
], N.prototype, "maxDate", 2);
he([
  a({ type: Boolean, reflect: !0 })
], N.prototype, "disabled", 2);
he([
  a({ type: String })
], N.prototype, "timezone", 2);
he([
  a({ type: String, attribute: "min-view" })
], N.prototype, "minView", 1);
he([
  b()
], N.prototype, "_currentView", 2);
he([
  b()
], N.prototype, "_focusDate", 2);
he([
  b()
], N.prototype, "_weeks", 2);
he([
  b()
], N.prototype, "_startYear", 2);
customElements.get(us) || customElements.define(us, N);
const At = 4, jt = 3, ps = 25, Pr = 30, $r = 15, ms = 27, Fr = f`
  @keyframes cardSlideIn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :host {
    display: flex;
    position: relative;
    background: var(--grey-800);
    border-radius: var(--radius-6);
    box-sizing: border-box;
  }

  :host([disabled]) {
    cursor: default;
    pointer-events: none;
  }

  :host([appearance='flat']) {
    background: none;
    box-shadow: none;
  }

  /* Status dot */
  .swim-card__status {
    display: block;
    background-color: var(--grey-550);
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .swim-card__status--success {
    background-color: var(--color-success);
  }

  .swim-card__status--error {
    background-color: var(--color-error);
  }

  .swim-card__accent {
    display: block;
    background: linear-gradient(180deg, var(--grey-100) 0%, var(--grey-200) 100%);
  }

  .swim-card__dot {
    display: inline-block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: var(--grey-400);
    margin: 3px var(--spacing-4);
  }

  /* Outline (selected or error) – match ngx-ui */
  .swim-card__outline {
    pointer-events: none;
    position: absolute;
    top: -5px;
    right: -5px;
    left: -5px;
    bottom: -5px;
    border: ${jt}px solid var(--blue-400);
    border-radius: var(--radius-6);
  }

  .swim-card__outline--error {
    border-color: var(--color-error);
  }

  .swim-card__outline-text {
    pointer-events: none;
    color: var(--blue-400);
    white-space: nowrap;
    position: absolute;
    top: -5px;
    right: -5px;
    left: -5px;
    bottom: -5px;
    border: ${jt}px solid var(--blue-400);
    border-bottom: 0;
    border-radius: var(--radius-6);
  }

  .swim-card__outline-text--error {
    color: var(--color-error);
    border-color: var(--color-error);
  }

  .swim-card__outline-text-inner {
    font-size: var(--font-size-s);
    width: 100%;
    text-align: center;
    position: absolute;
    display: flex;
    align-items: center;
    bottom: -8px;
    pointer-events: auto;
    cursor: pointer;
  }

  .swim-card__outline-text-inner::before,
  .swim-card__outline-text-inner::after {
    content: '';
    height: ${jt}px;
    background: var(--blue-400);
  }

  .swim-card__outline-text-inner::before {
    margin-right: var(--spacing-16);
    border-radius: var(--radius-0) var(--radius-0) var(--radius-0) var(--radius-2);
    flex: 1;
  }

  .swim-card__outline-text-inner::after {
    margin-left: var(--spacing-16);
    border-radius: var(--radius-0) var(--radius-0) var(--radius-2) var(--radius-0);
    width: var(--spacing-20);
  }

  .swim-card__outline-text--error .swim-card__outline-text-inner::before,
  .swim-card__outline-text--error .swim-card__outline-text-inner::after {
    background: var(--color-error);
  }

  /* Select checkbox (swim-checkbox round) – match ngx-ui */
  .swim-card__select {
    display: flex;
    align-items: center;
  }

  .swim-card__select swim-checkbox {
    --grey-600: var(--grey-750);
    margin: 0;
  }

  .swim-card__select swim-checkbox::part(box) {
    margin-right: 0;
  }
`, Br = f`
  :host([orientation='horizontal']) {
    position: relative;
    width: 100%;
    min-width: var(--swim-card-min-width, 500px);
    min-height: 80px;
    height: 80px;
    transition: all 0.2s ease-in-out;
    animation: 0.2s ease-in-out cardSlideIn;
  }

  :host([orientation='horizontal']) .swim-card__status {
    position: absolute;
    left: 10px;
    top: 10px;
  }

  :host([orientation='horizontal']) .swim-card__select {
    margin-left: ${ps}px;
  }

  :host([orientation='horizontal']) .swim-card__accent {
    position: absolute;
    width: ${At}px;
    min-width: ${At}px;
    right: 0;
    height: 100%;
    border-radius: var(--radius-0) var(--radius-2) var(--radius-2) var(--radius-0);
  }

  :host([orientation='horizontal']) ::slotted(swim-card-header) {
    display: flex;
    align-items: center;
    padding: var(--spacing-0) ${ps}px;
    flex-grow: 1;
    overflow: hidden;
    cursor: pointer;
  }

  :host([orientation='horizontal']) ::slotted(swim-card-header.no-click) {
    cursor: default;
  }

  :host([orientation='horizontal']) ::slotted(swim-card-section) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: var(--spacing-0) ${Pr}px;
  }

  :host([orientation='horizontal']) .swim-card__outline,
  :host([orientation='horizontal']) .swim-card__outline-text {
    top: -5px;
    right: -5px;
    left: -5px;
    bottom: -5px;
  }
`, Lr = f`
  :host([orientation='vertical']) {
    position: relative;
    flex-direction: column;
    min-width: 347px;
    max-width: 850px;
    height: 418px;
    color: var(--grey-350);
  }

  :host([orientation='vertical']) .swim-card__status {
    margin: ${$r}px auto var(--spacing-0) auto;
  }

  :host([orientation='vertical']) .swim-card__accent {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${At}px;
    border-radius: var(--radius-0) var(--radius-0) var(--radius-6) var(--radius-6);
  }

  :host([orientation='vertical']) ::slotted(swim-card-header) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex-shrink: 0;
    z-index: 1;
    overflow: visible;
  }

  :host([orientation='vertical']) ::slotted(swim-card-body) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: var(--spacing-20) var(--spacing-0);
    padding-left: ${ms}px;
    padding-right: ${ms}px;
  }

  :host([orientation='vertical']) ::slotted(swim-card-footer) {
    position: relative;
    width: 100%;
    flex-shrink: 0;
    height: 50px;
    padding: var(--spacing-20) var(--spacing-0);
    margin-top: 15px;
    margin-bottom: ${At}px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`, qr = [y, Fr, Br, Lr];
var pt = /* @__PURE__ */ ((o) => (o.Success = "success", o.Error = "error", o.Disabled = "disabled", o))(pt || {}), go = /* @__PURE__ */ ((o) => (o.Horizontal = "horizontal", o.Vertical = "vertical", o))(go || {}), fo = /* @__PURE__ */ ((o) => (o.Normal = "normal", o.Flat = "flat", o))(fo || {});
const Hr = f`
  :host {
    display: inline-flex;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) .swim-checkbox__label {
    cursor: not-allowed;
  }

  :host([round]) .swim-checkbox__box {
    border-radius: 100%;
  }

  .swim-checkbox__label {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 0;
    outline: none;
  }

  .swim-checkbox__label:focus-visible {
    outline: none;
  }

  .swim-checkbox__label:focus-visible .swim-checkbox__box {
    outline: 2px solid var(--blue-200);
    outline-offset: 1px;
  }

  .swim-checkbox__box {
    position: relative;
    flex-shrink: 0;
    border-radius: var(--radius-2);
    background-color: transparent;
    border: 2px solid var(--grey-600);
    transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
    user-select: none;
    margin: auto var(--spacing-10) auto 0;
    outline: 0 none transparent;
    outline-offset: 1px;
  }

  .swim-checkbox__box::after {
    position: absolute;
    top: calc(50% - 9px);
    left: calc(50% - 4px);
    width: 6px;
    height: 12px;
    content: '';
    border: solid var(--white);
    border-width: 0 2px 2px 0;
    transform: rotate(0deg) scale(0);
    transition: all 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
  }

  .swim-checkbox__box--indeterminate {
    background-color: var(--blue-400);
    border-radius: var(--radius-2);
    opacity: 1;
    border: 2px solid var(--blue-400);
    transform: rotate(0deg) scale(1);
  }

  .swim-checkbox__box--indeterminate::after {
    width: 12px;
    height: 2px;
    top: calc(50% - 1px);
    left: calc(50% - 6px);
    border: none;
    transform: rotate(0deg) scale(1);
    background-color: var(--white);
  }

  .swim-checkbox__box--checked {
    background-color: var(--blue-400);
    border-radius: var(--radius-2);
    opacity: 1;
    border: 2px solid var(--blue-400);
    transform: rotate(0deg) scale(1);
  }

  .swim-checkbox__box--checked::after {
    transform: rotate(45deg) scale(1);
    background-color: transparent;
  }

  .swim-checkbox__content {
    margin: auto 0;
    color: var(--grey-100);
    font-size: var(--font-size-m);
    line-height: var(--font-line-height-200);
  }
`;
var Vr = Object.defineProperty, Rr = Object.getOwnPropertyDescriptor, xe = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Rr(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && Vr(e, t, s), s;
};
let Yr = 0;
const bs = "swim-checkbox", Mt = class Mt extends _ {
  constructor() {
    super(), this.id = `swim-checkbox-${++Yr}`, this.name = "", this.diameter = "18px", this._checked = !1, this._indeterminate = !1, this._tabindex = 0, this._disabled = !1, this._round = !1, this._internals = this.attachInternals();
  }
  get checked() {
    return this._checked;
  }
  set checked(e) {
    const t = p(e);
    this._checked !== t && (this._checked = t, this._syncFormValue(), this.dispatchEvent(new CustomEvent("checked-change", { detail: this._checked, bubbles: !0, composed: !0 })));
  }
  get indeterminate() {
    return this._indeterminate;
  }
  set indeterminate(e) {
    const t = p(e);
    this._indeterminate !== t && (this._indeterminate = t, this.dispatchEvent(
      new CustomEvent("indeterminate-change", {
        detail: this._indeterminate,
        bubbles: !0,
        composed: !0
      })
    ));
  }
  get tabindex() {
    return this._tabindex;
  }
  set tabindex(e) {
    this._tabindex = S(e, 0);
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    this._disabled = p(e);
  }
  get round() {
    return this._round;
  }
  set round(e) {
    this._round = p(e);
  }
  connectedCallback() {
    super.connectedCallback(), this._syncFormValue();
  }
  updated(e) {
    super.updated(e), (e.has("checked") || e.has("_checked")) && this._syncFormValue();
  }
  /** Delegate focus to the focusable checkbox for form validation and accessibility */
  focus(e) {
    var t;
    (t = this._roving) == null || t.focus(e);
  }
  _syncFormValue() {
    this._internals.setFormValue(this._checked ? "on" : "");
  }
  _onClick(e) {
    e.preventDefault(), !this.disabled && this._toggle();
  }
  _onKeydown(e) {
    e.key !== " " || this.disabled || (e.stopPropagation(), e.preventDefault(), this._toggle());
  }
  _toggle() {
    this.checked = !this.checked, this._emitChange();
  }
  _emitChange() {
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          stopPropagation: () => {
          },
          timeStamp: Date.now(),
          target: { checked: this._checked }
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _onFocus(e) {
    this.dispatchEvent(new FocusEvent("focus", { ...e, bubbles: !0, composed: !0 }));
  }
  _onBlur(e) {
    this.dispatchEvent(new FocusEvent("blur", { ...e, bubbles: !0, composed: !0 }));
  }
  render() {
    const e = `${this.id}-content`;
    return c`
      <div
        class="swim-checkbox__roving swim-checkbox__label"
        role="checkbox"
        tabindex="${this.disabled ? -1 : this.tabindex}"
        aria-checked="${this.indeterminate ? "mixed" : this.checked}"
        aria-disabled="${this.disabled ? "true" : "false"}"
        aria-labelledby="${e}"
        @click="${this._onClick}"
        @keydown="${this._onKeydown}"
        @focus="${this._onFocus}"
        @blur="${this._onBlur}"
      >
        <div
          part="box"
          class="swim-checkbox__box ${this.checked && !this.indeterminate ? "swim-checkbox__box--checked" : ""} ${this.indeterminate ? "swim-checkbox__box--indeterminate" : ""}"
          style="width: ${this.diameter}; height: ${this.diameter}; min-width: ${this.diameter}; min-height: ${this.diameter};"
        ></div>
        <div part="content" class="swim-checkbox__content" id="${e}">
          <slot></slot>
        </div>
      </div>
    `;
  }
};
Mt.styles = [y, Hr], Mt.formAssociated = !0;
let Z = Mt;
xe([
  q(".swim-checkbox__roving")
], Z.prototype, "_roving", 2);
xe([
  a({ type: String })
], Z.prototype, "id", 2);
xe([
  a({ type: String })
], Z.prototype, "name", 2);
xe([
  a({ type: String })
], Z.prototype, "diameter", 2);
xe([
  a({ type: Boolean, reflect: !0, attribute: "checked" })
], Z.prototype, "checked", 1);
xe([
  a({ type: Boolean, reflect: !0 })
], Z.prototype, "indeterminate", 1);
xe([
  a({ type: Number })
], Z.prototype, "tabindex", 1);
xe([
  a({ type: Boolean, reflect: !0 })
], Z.prototype, "disabled", 1);
xe([
  a({ type: Boolean, reflect: !0 })
], Z.prototype, "round", 1);
customElements.get(bs) || customElements.define(bs, Z);
var Ur = Object.defineProperty, Nr = Object.getOwnPropertyDescriptor, ue = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Nr(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && Ur(e, t, s), s;
};
const gs = "swim-card", vi = class vi extends _ {
  constructor() {
    super(...arguments), this._disabled = !1, this.orientation = go.Horizontal, this.statusTooltip = "", this._selectable = !1, this._selected = !1, this._error = !1, this.outlineText = "", this.appearance = fo.Normal, this._hideAccent = !1;
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    this._disabled = p(e);
  }
  get selectable() {
    return this._selectable;
  }
  set selectable(e) {
    this._selectable = p(e);
  }
  get selected() {
    return this._selected;
  }
  set selected(e) {
    this._selected = p(e);
  }
  get error() {
    return this._error;
  }
  set error(e) {
    this._error = p(e);
  }
  get hideAccent() {
    return this._hideAccent;
  }
  set hideAccent(e) {
    this._hideAccent = p(e);
  }
  _onOutlineClick(e) {
    e.stopPropagation(), this.dispatchEvent(new CustomEvent("outline-click", { bubbles: !0, composed: !0 }));
  }
  _onSelectChange(e) {
    var i, s;
    e.stopPropagation();
    const t = ((s = (i = e.detail) == null ? void 0 : i.target) == null ? void 0 : s.checked) ?? !1;
    this.selected = t, this.dispatchEvent(
      new CustomEvent("select", {
        detail: this.selected,
        bubbles: !0,
        composed: !0
      })
    );
  }
  _onCheckboxClick(e) {
    e.stopPropagation();
  }
  render() {
    const e = this.selected && !this.outlineText && !this.error, t = this.error && !this.outlineText, i = !!this.outlineText, s = !!this.status, r = this.status === pt.Success ? "swim-card__status--success" : this.status === pt.Error ? "swim-card__status--error" : "";
    return c`
      ${e ? c`<div class="swim-card__outline" aria-hidden="true"></div>` : u}
      ${t ? c`<div class="swim-card__outline swim-card__outline--error" aria-hidden="true"></div>` : u}
      ${i ? c`
            <div
              class="swim-card__outline-text ${this.error ? "swim-card__outline-text--error" : ""}"
              aria-hidden="true"
            >
              <div
                part="outline-text"
                class="swim-card__outline-text-inner"
                role="button"
                tabindex="${this.disabled ? -1 : 0}"
                aria-label="${this.outlineText}"
                @click="${this._onOutlineClick}"
                @keydown="${(n) => {
      (n.key === "Enter" || n.key === " ") && (n.preventDefault(), this._onOutlineClick(n));
    }}"
              >
                ${this.outlineText}
              </div>
            </div>
          ` : u}
      ${s ? c`
            <div
              class="swim-card__status ${r}"
              title="${this.statusTooltip}"
              role="status"
              aria-label="${this.statusTooltip || this.status || ""}"
            ></div>
          ` : u}
      ${this.selectable ? c`
            <div class="swim-card__select" @click="${this._onCheckboxClick}">
              <swim-checkbox
                round
                .checked="${this.selected}"
                ?disabled="${this.disabled}"
                aria-label="Select card"
                @change="${this._onSelectChange}"
              ></swim-checkbox>
            </div>
          ` : u}

      <slot></slot>

      ${this.hideAccent ? u : c`<div class="swim-card__accent" aria-hidden="true"></div>`}
    `;
  }
};
vi.styles = qr;
let G = vi;
ue([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "disabled", 1);
ue([
  a({ type: String, reflect: !0 })
], G.prototype, "orientation", 2);
ue([
  a({ type: String, reflect: !0 })
], G.prototype, "status", 2);
ue([
  a({ type: String, attribute: "status-tooltip" })
], G.prototype, "statusTooltip", 2);
ue([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "selectable", 1);
ue([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "selected", 1);
ue([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "error", 1);
ue([
  a({ type: String, attribute: "outline-text" })
], G.prototype, "outlineText", 2);
ue([
  a({ type: String, reflect: !0 })
], G.prototype, "appearance", 2);
ue([
  a({ type: Boolean, attribute: "hide-accent" })
], G.prototype, "hideAccent", 1);
customElements.get(gs) || customElements.define(gs, G);
var _o = /* @__PURE__ */ ((o) => (o.Small = "small", o.Medium = "medium", o.Large = "large", o))(_o || {});
const fs = 25, Gr = f`
  :host {
    display: flex;
    align-items: center;
    padding: var(--spacing-0) ${fs}px;
    flex-grow: 1;
    overflow: hidden;
    cursor: pointer;
    box-sizing: border-box;
  }

  :host(.no-click) {
    cursor: default;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
    flex-grow: 0;
    padding: var(--spacing-0);
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    overflow: visible;
    position: relative;
  }

  :host([orientation='vertical']) ::slotted(swim-card-avatar) {
    margin: 15px var(--spacing-0) var(--spacing-20) var(--spacing-0);
    flex-shrink: 0;
  }

  .swim-card-header__title-group {
    margin-left: ${fs}px;
    display: flex;
    flex-direction: column;
    width: calc(100% - 79px);
  }

  :host([orientation='vertical']) .swim-card-header__title-group {
    margin-left: 0;
    width: 100%;
    padding: 0 var(--spacing-16);
    text-align: center;
  }

  :host([orientation='vertical']) ::slotted([slot='title']) {
    text-align: center;
  }

  :host([orientation='vertical']) ::slotted([slot='subtitle']) {
    text-align: center;
  }

  .swim-card-header__tag,
  .swim-card-header__title,
  .swim-card-header__subtitle {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--white);
  }

  ::slotted([slot='tag']) {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-xxs);
    line-height: 12px;
  }

  ::slotted([slot='title']) {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-xl);
    color: var(--grey-050);
  }

  ::slotted([slot='subtitle']) {
    display: inline-block;
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-s);
    color: var(--grey-300);
  }

  .swim-card-header__label {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-xs);
    color: var(--color-success);
    border-bottom: 0;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
  }

  .swim-card-header__label::before,
  .swim-card-header__label::after {
    content: '';
    height: 2px;
    background: var(--grey-700);
    width: 100%;
  }

  .swim-card-header__label::before {
    margin-right: var(--spacing-20);
  }

  .swim-card-header__label::after {
    margin-left: var(--spacing-20);
  }
`, Jr = [y, Gr];
var Kr = Object.defineProperty, wo = (o, e, t, i) => {
  for (var s = void 0, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = n(e, t, s) || s);
  return s && Kr(e, t, s), s;
};
const _s = "swim-card-header", yi = class yi extends _ {
  constructor() {
    super(...arguments), this.label = "", this.orientation = "horizontal";
  }
  render() {
    return c`
      <slot name="avatar"></slot>
      <div class="swim-card-header__title-group">
        <slot></slot>
        ${this.label ? c`<div class="swim-card-header__label">${this.label}</div>` : u}
        <slot name="tag"></slot>
        <slot name="title"></slot>
        <slot name="subtitle"></slot>
      </div>
    `;
  }
};
yi.styles = Jr;
let mt = yi;
wo([
  a({ type: String })
], mt.prototype, "label");
wo([
  a({ type: String, reflect: !0 })
], mt.prototype, "orientation");
customElements.get(_s) || customElements.define(_s, mt);
const jr = f`
  :host {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
  }

  .swim-card-footer__label {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-xs);
    color: var(--blue-400);
    border-bottom: 0;
    white-space: nowrap;
    width: 100%;
    text-align: center;
    position: absolute;
    display: flex;
    align-items: center;
    top: -15px;
    left: 0;
  }

  .swim-card-footer__label::before,
  .swim-card-footer__label::after {
    content: '';
    height: 2px;
    background: var(--grey-700);
    width: 100%;
  }

  .swim-card-footer__label::before {
    margin-right: var(--spacing-20);
  }

  .swim-card-footer__label::after {
    margin-left: var(--spacing-20);
  }

  /* Center footer action (match ngx-ui); prevent slotted button from stretching */
  ::slotted(swim-button) {
    width: auto;
  }
`, Wr = [y, jr];
var Qr = Object.defineProperty, Zr = (o, e, t, i) => {
  for (var s = void 0, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = n(e, t, s) || s);
  return s && Qr(e, t, s), s;
};
const ws = "swim-card-footer", xi = class xi extends _ {
  constructor() {
    super(...arguments), this.label = "";
  }
  render() {
    return c`
      ${this.label ? c`<div class="swim-card-footer__label">${this.label}</div>` : u}
      <slot></slot>
    `;
  }
};
xi.styles = Wr;
let Et = xi;
Zr([
  a({ type: String })
], Et.prototype, "label");
customElements.get(ws) || customElements.define(ws, Et);
const vs = 3, Xr = f`
  :host {
    width: 54px;
    height: 54px;
    min-width: 54px;
    min-height: 54px;
    display: inline-block;
    box-sizing: border-box;
  }

  .swim-card-avatar__img:not(.swim-card-avatar__img--no-bg) {
    background-color: var(--white);
  }

  .swim-card-avatar__avatar {
    border: 2px solid var(--grey-100);
    border-radius: 100%;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    display: flex;
    box-sizing: border-box;
  }

  .swim-card-avatar__inner {
    display: flex;
    height: 100%;
    width: 100%;
    border: ${vs}px solid transparent;
    border-radius: 100%;
    overflow: hidden;
    position: relative;
  }

  .swim-card-avatar__status {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: ${vs}px solid var(--grey-800);
    background-color: var(--white);
    z-index: 2;
  }

  .swim-card-avatar__status--success {
    background-color: var(--color-success);
  }

  .swim-card-avatar__status--error {
    background-color: var(--color-error);
  }

  .swim-card-avatar__avatar.has-status .swim-card-avatar__status {
    box-shadow: none;
  }

  .swim-card-avatar__img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
  }

  .swim-card-avatar__img--no-bg {
    background-color: transparent;
  }

  .swim-card-avatar__content {
    margin: auto;
    font-size: var(--font-size-m);
    color: var(--grey-100);
    font-weight: var(--font-weight-bold);
  }
`, en = [y, Xr];
var tn = Object.defineProperty, li = (o, e, t, i) => {
  for (var s = void 0, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = n(e, t, s) || s);
  return s && tn(e, t, s), s;
};
const ys = "swim-card-avatar", ki = class ki extends _ {
  constructor() {
    super(...arguments), this.src = "", this.removeImageBackground = !1;
  }
  render() {
    const e = !!this.status, t = this.status === pt.Success ? "swim-card-avatar__status--success" : this.status === pt.Error ? "swim-card-avatar__status--error" : "";
    return c`
      <div class="swim-card-avatar__avatar ${e ? "has-status" : ""}">
        ${e ? c`<div
              class="swim-card-avatar__status ${t}"
              role="status"
              aria-label="${this.status || ""}"
            ></div>` : u}
        <div class="swim-card-avatar__inner">
          ${this.src ? c`
                <img
                  class="swim-card-avatar__img ${this.removeImageBackground ? "swim-card-avatar__img--no-bg" : ""}"
                  src="${this.src}"
                  alt=""
                  draggable="false"
                  loading="lazy"
                />
              ` : c`<span class="swim-card-avatar__content"><slot></slot></span>`}
        </div>
      </div>
    `;
  }
};
ki.styles = en;
let Ke = ki;
li([
  a({ type: String })
], Ke.prototype, "src");
li([
  a({ type: String, reflect: !0 })
], Ke.prototype, "status");
li([
  a({ type: Boolean, attribute: "remove-image-background" })
], Ke.prototype, "removeImageBackground");
customElements.get(ys) || customElements.define(ys, Ke);
const sn = f`
  :host {
    display: inline-block;
    background-color: var(--grey-750);
    border-radius: 11px;
    box-sizing: border-box;
    vertical-align: middle;
  }

  :host([size='small']) {
    height: 10px;
    width: 35%;
    min-width: 80px;
  }

  :host([size='medium']) {
    height: 12px;
    width: 30%;
    min-width: 100px;
  }

  :host([size='large']) {
    height: 16px;
    width: 50%;
    min-width: 150px;
  }
`, on = [y, sn];
var rn = Object.defineProperty, nn = (o, e, t, i) => {
  for (var s = void 0, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = n(e, t, s) || s);
  return s && rn(e, t, s), s;
};
const xs = "swim-card-placeholder", Ci = class Ci extends _ {
  constructor() {
    super(...arguments), this.size = _o.Medium;
  }
  render() {
    return c``;
  }
};
Ci.styles = on;
let zt = Ci;
nn([
  a({ type: String, reflect: !0 })
], zt.prototype, "size");
customElements.get(xs) || customElements.define(xs, zt);
const ks = 27, an = f`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: var(--spacing-20) var(--spacing-0);
    padding-left: ${ks}px;
    padding-right: ${ks}px;
    box-sizing: border-box;
  }

  ::slotted(*) {
    font-weight: var(--font-weight-semibold);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
`, ln = [y, an], Cs = "swim-card-body", Ai = class Ai extends _ {
  render() {
    return c`<slot></slot>`;
  }
};
Ai.styles = ln;
let Xt = Ai;
customElements.get(Cs) || customElements.define(Cs, Xt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ge = (o) => o ?? u;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ae = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4 }, ci = (o) => (...e) => ({ _$litDirective$: o, values: e });
class di {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, i) {
    this._$Ct = e, this._$AM = t, this._$Ci = i;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { I: cn } = Jo, dn = (o) => o.strings === void 0, As = () => document.createComment(""), ot = (o, e, t) => {
  var r;
  const i = o._$AA.parentNode, s = e === void 0 ? o._$AB : e._$AA;
  if (t === void 0) {
    const n = i.insertBefore(As(), s), l = i.insertBefore(As(), s);
    t = new cn(n, l, o, o.options);
  } else {
    const n = t._$AB.nextSibling, l = t._$AM, d = l !== o;
    if (d) {
      let h;
      (r = t._$AQ) == null || r.call(t, o), t._$AM = o, t._$AP !== void 0 && (h = o._$AU) !== l._$AU && t._$AP(h);
    }
    if (n !== s || d) {
      let h = t._$AA;
      for (; h !== n; ) {
        const w = h.nextSibling;
        i.insertBefore(h, s), h = w;
      }
    }
  }
  return t;
}, Me = (o, e, t = o) => (o._$AI(e, t), o), hn = {}, vo = (o, e = hn) => o._$AH = e, un = (o) => o._$AH, Wt = (o) => {
  o._$AR(), o._$AA.remove();
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Es = ci(class extends di {
  constructor(o) {
    if (super(o), o.type !== Ae.PROPERTY && o.type !== Ae.ATTRIBUTE && o.type !== Ae.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
    if (!dn(o)) throw Error("`live` bindings can only contain a single expression");
  }
  render(o) {
    return o;
  }
  update(o, [e]) {
    if (e === Q || e === u) return e;
    const t = o.element, i = o.name;
    if (o.type === Ae.PROPERTY) {
      if (e === t[i]) return Q;
    } else if (o.type === Ae.BOOLEAN_ATTRIBUTE) {
      if (!!e === t.hasAttribute(i)) return Q;
    } else if (o.type === Ae.ATTRIBUTE && t.getAttribute(i) === e + "") return Q;
    return vo(o), e;
  }
}), _t = f`
  /* Only set standard scrollbar props in browsers that don't support -webkit-scrollbar.
   * Chrome 121+ disables ::-webkit-scrollbar (and thumb :hover) when scrollbar-color/width are set. */
  @supports not selector(::-webkit-scrollbar) {
    .swim-scroll,
    .swim-scroll-overlay,
    .swim-scroll-muted,
    .swim-scroll * {
      scrollbar-width: thin;
      scrollbar-color: rgb(80, 92, 117) transparent;
    }
  }

  /* Base: make element scrollable so scrollbar styling applies (matches overlay/muted) */
  .swim-scroll {
    overflow: auto;
    overflow: overlay;
  }

  .swim-scroll::-webkit-scrollbar,
  .swim-scroll-overlay::-webkit-scrollbar,
  .swim-scroll-muted::-webkit-scrollbar,
  .swim-scroll *::-webkit-scrollbar {
    width: 13px;
    height: 13px;
  }

  /* Track: transparent (matches ngx-ui scrollbars.scss) */
  .swim-scroll::-webkit-scrollbar-track,
  .swim-scroll-overlay::-webkit-scrollbar-track,
  .swim-scroll-muted::-webkit-scrollbar-track,
  .swim-scroll *::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
    margin: 0;
  }

  .swim-scroll::-webkit-scrollbar-corner,
  .swim-scroll-overlay::-webkit-scrollbar-corner,
  .swim-scroll-muted::-webkit-scrollbar-corner,
  .swim-scroll *::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  .swim-scroll::-webkit-scrollbar-thumb,
  .swim-scroll-overlay::-webkit-scrollbar-thumb,
  .swim-scroll-muted::-webkit-scrollbar-thumb,
  .swim-scroll *::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }

  .swim-scroll::-webkit-scrollbar-button,
  .swim-scroll::-webkit-scrollbar-track-piece,
  .swim-scroll::-webkit-scrollbar-corner,
  .swim-scroll::-webkit-resizer,
  .swim-scroll-overlay::-webkit-scrollbar-button,
  .swim-scroll-overlay::-webkit-scrollbar-track-piece,
  .swim-scroll-overlay::-webkit-scrollbar-corner,
  .swim-scroll-overlay::-webkit-resizer,
  .swim-scroll-muted::-webkit-scrollbar-button,
  .swim-scroll-muted::-webkit-scrollbar-track-piece,
  .swim-scroll-muted::-webkit-scrollbar-corner,
  .swim-scroll-muted::-webkit-resizer,
  .swim-scroll *::-webkit-scrollbar-button,
  .swim-scroll *::-webkit-scrollbar-track-piece,
  .swim-scroll *::-webkit-scrollbar-corner,
  .swim-scroll *::-webkit-resizer {
    display: none;
  }

  /* Default & overlay: thumb 50% opacity (rest), full opacity on hover (matches ngx-ui). */
  /* Use literal rgba for default so scrollbar pseudo-elements always get a distinct rest state. */
  .swim-scroll::-webkit-scrollbar-thumb,
  .swim-scroll *::-webkit-scrollbar-thumb,
  .swim-scroll-overlay::-webkit-scrollbar-thumb {
    background-color: rgba(80, 92, 117, 0.5);
  }

  .swim-scroll::-webkit-scrollbar-thumb:hover,
  .swim-scroll *::-webkit-scrollbar-thumb:hover,
  .swim-scroll-overlay::-webkit-scrollbar-thumb:hover {
    background-color: rgb(80, 92, 117);
  }

  /* Overlay: scrollbars hidden until hover */
  .swim-scroll-overlay {
    overflow: auto;
    overflow: overlay;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  .swim-scroll-overlay::-webkit-scrollbar {
    display: none;
  }

  .swim-scroll-overlay:hover::-webkit-scrollbar {
    display: initial;
  }

  /* Muted: thumb 30% → 50% on container hover → 100% on thumb hover (matches ngx-ui). Literal rgba for reliability. */
  .swim-scroll-muted {
    overflow: auto;
    overflow: overlay;
  }

  .swim-scroll-muted::-webkit-scrollbar-thumb {
    background-color: rgba(80, 92, 117, 0.3);
  }

  .swim-scroll-muted:hover::-webkit-scrollbar-thumb {
    background-color: rgba(80, 92, 117, 0.5);
  }

  .swim-scroll-muted:hover::-webkit-scrollbar-thumb:hover {
    background-color: rgb(80, 92, 117);
  }
`, pn = f`
  :host {
    display: block;
    max-width: 100%;
    margin-top: var(--spacing-16);
    margin-bottom: var(--spacing-8);
    line-height: calc(1em + 0.75em);
    padding-top: calc(0.75rem + 8px);
    padding-bottom: 0;
  }

  :host([marginless]) {
    margin-top: 0;
    margin-bottom: 0;
  }

  :host([no-label]) {
    padding-top: 0;
  }

  :host([size='md']) .input-box,
  :host([size='md']) .input-textarea {
    font-size: var(--font-size-l) !important;
  }

  :host([size='lg']) .input-box,
  :host([size='lg']) .input-textarea {
    font-size: var(--font-size-xl) !important;
  }

  :host([focused]:not([invalid])) .input-label {
    color: var(--blue-500) !important;
  }

  :host([invalid][touched]) .input-underline,
  :host([invalid][dirty]) .input-underline {
    background-color: var(--red-500) !important;
  }

  :host([invalid][touched]) .underline-fill,
  :host([invalid][dirty]) .underline-fill {
    background-color: var(--red-500) !important;
  }

  :host([invalid][touched]) .input-label,
  :host([invalid][dirty]) .input-label {
    color: var(--red-500);
  }

  :host([invalid][touched]) .input-hint,
  :host([invalid][dirty]) .input-hint {
    color: var(--red-500);
  }

  :host([invalid][touched]) .input-box,
  :host([invalid][dirty]) .input-box,
  :host([invalid][touched]) .input-textarea,
  :host([invalid][dirty]) .input-textarea {
    caret-color: var(--red-500) !important;
  }

  :host([autosize]) {
    display: inline-block;
  }

  /* Chrome autofill override */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--grey-100) !important;
  }

  .input-flex-wrap {
    display: flex;
  }

  .input-flex-wrap-inner {
    display: flex;
    flex: 1;
    max-width: 100%;
  }

  ::slotted([slot='prefix']),
  ::slotted([slot='suffix']) {
    flex: none;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ::slotted([slot='prefix']) {
    margin-right: var(--spacing-8);
  }

  ::slotted([slot='suffix']) {
    margin-left: var(--spacing-8);
  }

  .input-wrap {
    position: relative;
    display: block;
    margin-bottom: var(--spacing-0);
    width: 100%;
  }

  .input-box-wrap {
    position: relative;
    width: 100%;
    display: flex;
    min-height: 1.75em;
  }

  .input-box-wrap:focus {
    outline: none;
  }

  .input-box,
  .input-textarea {
    flex: auto;
    display: block;
    background: transparent;
    border: none;
    margin-bottom: var(--spacing-0);
    padding-left: var(--spacing-0);
    width: 100%;
    max-width: 100%;
    color: var(--grey-050);
    font-size: var(--font-size-m);
    line-height: 1.25em;
    min-height: var(--input-height, 33px);
    font-family: inherit;
    caret-color: var(--blue-500);
  }

  .input-box::placeholder,
  .input-textarea::placeholder {
    color: var(--grey-350);
  }

  .input-box:focus,
  .input-textarea:focus {
    box-shadow: none;
    outline: none;
  }

  .input-box:disabled,
  .input-textarea:disabled {
    color: var(--grey-400);
    user-select: none;
  }

  .input-box {
    margin: 3px 0;
  }

  .input-box[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .input-textarea {
    resize: none;
  }

  .input-label {
    position: absolute;
    top: 0.5em;
    line-height: var(--font-line-height-100);
    pointer-events: none;
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-semibold);
    color: var(--grey-350);
    white-space: nowrap;
    overflow-x: clip;
    max-width: 100%;
    text-overflow: ellipsis;
    transition: color 0.2s ease-out, font-size 150ms ease-out, top 150ms ease-out;
  }

  :host([active]) .input-label,
  :host([has-placeholder]) .input-label {
    font-size: var(--font-size-xs);
    top: -1.4em;
  }

  .input-underline {
    width: 100%;
    height: 1px;
    background-color: var(--grey-600);
  }

  .input-underline.visibility-hidden {
    visibility: hidden;
  }

  .underline-fill {
    background-color: var(--blue-500);
    transition: width 250ms ease-out;
    width: 0;
    height: 2px;
    margin: 0 auto;
  }

  :host([focused]) .underline-fill {
    width: 100%;
  }

  .input-hint {
    font-size: var(--font-size-xs);
    color: var(--grey-350);
    margin-top: var(--spacing-8);
    min-height: 1em;
    line-height: 14px;
    transition: color 0.2s ease-in-out;
  }

  .input-hint.hidden {
    display: none;
  }

  .password-toggle,
  .lock-toggle {
    line-height: 25px;
    top: 0;
    bottom: 0;
    right: 10px;
    cursor: pointer;
    font-size: var(--font-size-s);
    color: var(--grey-300);
    transition: color 100ms;
    padding: 0;
    z-index: 1;
    background: transparent;
    border: none;
    position: absolute;
  }

  .password-toggle:hover,
  .lock-toggle:hover {
    color: var(--grey-050);
  }

  .numeric-spinner {
    display: flex;
    z-index: 2;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
    transition: all 0.1s ease-out;
  }

  :host(:not([disabled])) .input-box-wrap:hover .numeric-spinner,
  .input-box:focus + .numeric-spinner {
    opacity: 1;
  }

  .spinner-btn {
    font-size: var(--font-size-xxs);
    color: var(--grey-300);
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    line-height: 1;
  }

  .spinner-btn:hover {
    color: var(--grey-100);
  }

  .spinner-btn:active {
    transform: scale(1.4);
  }

  /* Fill appearance */
  :host([appearance='fill']:not([readonly])) .input-flex-wrap {
    position: relative;
  }

  :host([appearance='fill']:not([readonly])) .input-flex-wrap::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--grey-875);
    mix-blend-mode: exclusion;
    pointer-events: none;
    border-top-left-radius: var(--radius-4);
    border-top-right-radius: var(--radius-4);
  }

  :host([appearance='fill']) .input-label {
    left: 0;
  }

  :host([appearance='fill']) .input-box-wrap .password-toggle,
  :host([appearance='fill']) .input-box-wrap .lock-toggle {
    line-height: 33.33px;
    z-index: 2;
  }

  :host([appearance='fill']) .input-box,
  :host([appearance='fill']) .input-textarea {
    margin: 0;
    padding: var(--spacing-4) 10px;
    position: relative;
    z-index: 1;
  }

  :host([appearance='fill']) .input-box + .numeric-spinner {
    right: 10px;
  }

  :host([appearance='fill']) ::slotted([slot='prefix']),
  :host([appearance='fill']) ::slotted([slot='suffix']) {
    color: var(--grey-350);
  }

  :host([appearance='fill']) ::slotted([slot='prefix']) {
    padding-left: var(--spacing-10);
  }

  :host([appearance='fill']) ::slotted([slot='suffix']) {
    padding-right: var(--spacing-10);
  }

  /* swim-icon in spinner and password toggle */
  .spinner-btn swim-icon,
  .password-toggle swim-icon {
    display: inline-block;
    font-size: 1em;
  }
`;
var fe = /* @__PURE__ */ ((o) => (o.text = "text", o.password = "password", o.email = "email", o.number = "number", o.tel = "tel", o.url = "url", o.textarea = "textarea", o))(fe || {}), hi = /* @__PURE__ */ ((o) => (o.legacy = "legacy", o.fill = "fill", o))(hi || {}), ui = /* @__PURE__ */ ((o) => (o.sm = "sm", o.md = "md", o.lg = "lg", o))(ui || {}), mn = Object.defineProperty, bn = Object.getOwnPropertyDescriptor, z = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? bn(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && mn(e, t, s), s;
};
const zs = "swim-input", Tt = class Tt extends _ {
  constructor() {
    super(), this.type = fe.text, this.label = "", this.placeholder = "", this.hint = "", this._value = "", this.name = "", this.id = `swim-input-${Math.random().toString(36).substr(2, 9)}`, this._disabled = !1, this._readonly = !1, this._required = !1, this._autofocus = !1, this.autocomplete = "off", this.appearance = hi.legacy, this.size = ui.sm, this._withMargin = !0, this._withHint = !0, this._passwordToggleEnabled = !1, this.textareaRows = 3, this.requiredIndicator = "*", this._focused = !1, this._passwordVisible = !1, this._touched = !1, this._dirty = !1, this._invalid = !1, this._internals = this.attachInternals();
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    this._value = e, this._internals.setFormValue(e), this.requestUpdate("value", t), this._updateActiveState();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    this._disabled = p(e);
  }
  get readonly() {
    return this._readonly;
  }
  set readonly(e) {
    this._readonly = p(e);
  }
  get required() {
    return this._required;
  }
  set required(e) {
    this._required = p(e);
  }
  get autofocus() {
    return this._autofocus;
  }
  set autofocus(e) {
    this._autofocus = p(e);
  }
  get marginless() {
    return !this._withMargin;
  }
  set marginless(e) {
    this._withMargin = !p(e);
  }
  get withHint() {
    return this._withHint;
  }
  set withHint(e) {
    this._withHint = p(e);
  }
  get passwordToggleEnabled() {
    return this._passwordToggleEnabled;
  }
  set passwordToggleEnabled(e) {
    this._passwordToggleEnabled = p(e);
  }
  connectedCallback() {
    super.connectedCallback(), this._updateActiveState();
  }
  firstUpdated() {
    this.autofocus && this.inputElement && setTimeout(() => {
      this.inputElement.focus();
    });
  }
  /** Delegate focus to the internal input so form validation can focus invalid controls. */
  focus(e) {
    var t;
    (t = this.inputElement) == null || t.focus(e);
  }
  updated(e) {
    super.updated(e), e.has("value") && this._updateActiveState(), (e.has("required") || e.has("min") || e.has("max")) && this._validate();
  }
  render() {
    const e = this.type === fe.textarea, t = this.type === fe.password && this.passwordToggleEnabled && !this.disabled, i = this.type === fe.number && !this.disabled, s = this._passwordVisible ? fe.text : this.type;
    return c`
      <div class="input-wrap">
        <div class="input-flex-wrap">
          <slot name="prefix"></slot>
          <div class="input-flex-wrap-inner">
            <div class="input-box-wrap">
              ${e ? this._renderTextarea() : this._renderInput(s)}
              ${i ? c`
                    <div class="numeric-spinner">
                      <button
                        type="button"
                        class="spinner-btn"
                        @mousedown="${this._incrementValue}"
                        @mouseup="${this._stopSpinner}"
                        @mouseleave="${this._stopSpinner}"
                        aria-label="Increment"
                      >
                        <swim-icon font-icon="chevron-bold-up"></swim-icon>
                      </button>
                      <button
                        type="button"
                        class="spinner-btn"
                        @mousedown="${this._decrementValue}"
                        @mouseup="${this._stopSpinner}"
                        @mouseleave="${this._stopSpinner}"
                        aria-label="Decrement"
                      >
                        <swim-icon font-icon="chevron-bold-down"></swim-icon>
                      </button>
                    </div>
                  ` : u}
              ${t ? c`
                    <button
                      type="button"
                      class="password-toggle"
                      @click="${this._togglePassword}"
                      aria-label="Toggle password visibility"
                    >
                      <swim-icon font-icon="${this._passwordVisible ? "eye-disabled" : "eye"}"></swim-icon>
                    </button>
                  ` : u}
            </div>
            <label class="input-label" part="label" for="${this.id}">
              ${this.label} ${this.required ? c`<span>${this.requiredIndicator}</span>` : u}
            </label>
          </div>
          <slot name="suffix"></slot>
        </div>
        <div class="input-underline ${this.readonly ? "visibility-hidden" : ""}">
          <div class="underline-fill"></div>
        </div>
        <div class="input-hint ${this.withHint ? "" : "hidden"}">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `;
  }
  _renderInput(e) {
    return c`
      <input
        part="input"
        class="input-box"
        type="${e}"
        id="${this.id}"
        name="${this.name}"
        .value="${Es(this.value)}"
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        min="${ge(this.min)}"
        max="${ge(this.max)}"
        minlength="${ge(this.minlength)}"
        maxlength="${ge(this.maxlength)}"
        tabindex="${ge(this.tabindex)}"
        autocomplete="${this.autocomplete}"
        @input="${this._handleInput}"
        @change="${this._handleChange}"
        @focus="${this._handleFocus}"
        @blur="${this._handleBlur}"
      />
    `;
  }
  _renderTextarea() {
    return c`
      <textarea
        part="input"
        class="input-textarea swim-scroll"
        id="${this.id}"
        name="${this.name}"
        .value="${Es(this.value)}"
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        rows="${this.textareaRows}"
        minlength="${ge(this.minlength)}"
        maxlength="${ge(this.maxlength)}"
        tabindex="${ge(this.tabindex)}"
        autocomplete="${this.autocomplete}"
        @input="${this._handleInput}"
        @change="${this._handleChange}"
        @focus="${this._handleFocus}"
        @blur="${this._handleBlur}"
      ></textarea>
    `;
  }
  _handleInput(e) {
    const t = e.target;
    this.value = t.value, this._dirty || (this._dirty = !0, this.setAttribute("dirty", "")), this.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 }));
  }
  _handleChange(e) {
    this._validate(), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
  }
  _handleFocus(e) {
    this._focused = !0, this.setAttribute("focused", ""), this.dispatchEvent(new FocusEvent("focus", { bubbles: !0, composed: !0 }));
  }
  _handleBlur(e) {
    this._focused = !1, this.removeAttribute("focused"), this._touched || (this._touched = !0, this.setAttribute("touched", "")), this._validate(), this.dispatchEvent(new FocusEvent("blur", { bubbles: !0, composed: !0 }));
  }
  _togglePassword() {
    var e;
    this._passwordVisible = !this._passwordVisible, (e = this.inputElement) == null || e.focus();
  }
  _incrementValue(e) {
    e.preventDefault(), !this.disabled && (this._increment(), this._spinnerTimeout = window.setTimeout(() => {
      this._spinnerInterval = window.setInterval(() => this._increment(), 50);
    }, 500));
  }
  _decrementValue(e) {
    e.preventDefault(), !this.disabled && (this._decrement(), this._spinnerTimeout = window.setTimeout(() => {
      this._spinnerInterval = window.setInterval(() => this._decrement(), 50);
    }, 500));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._stopSpinner();
  }
  _stopSpinner() {
    this._spinnerTimeout !== void 0 && (clearTimeout(this._spinnerTimeout), this._spinnerTimeout = void 0), this._spinnerInterval !== void 0 && (clearInterval(this._spinnerInterval), this._spinnerInterval = void 0);
  }
  _increment() {
    if (this.inputElement && this.type === fe.number) {
      const e = this.inputElement, t = parseFloat(e.value) || 0;
      if (this.max !== void 0 && t >= this.max) return;
      const i = t + 1;
      this.value = i.toString(), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
    }
  }
  _decrement() {
    if (this.inputElement && this.type === fe.number) {
      const e = this.inputElement, t = parseFloat(e.value) || 0;
      if (this.min !== void 0 && t <= this.min) return;
      const i = t - 1;
      this.value = i.toString(), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
    }
  }
  _validate() {
    let e = !0;
    if (this.required && !this.value && (e = !1), this.type === fe.number && this.value) {
      const t = parseFloat(this.value);
      this.min !== void 0 && t < this.min && (e = !1), this.max !== void 0 && t > this.max && (e = !1);
    }
    return this.minlength && this.value.length < this.minlength && (e = !1), this.maxlength && this.value.length > this.maxlength && (e = !1), this.inputElement && (this.inputElement.validity.valid || (e = !1)), this._invalid = !e, this._invalid ? (this.setAttribute("invalid", ""), this._internals.setValidity({ customError: !0 }, "Invalid input")) : (this.removeAttribute("invalid"), this._internals.setValidity({})), e;
  }
  _updateActiveState() {
    const e = this.value && this.value.length > 0, t = !!this.placeholder;
    this._focused || e ? this.setAttribute("active", "") : this.removeAttribute("active"), t ? this.setAttribute("has-placeholder", "") : this.removeAttribute("has-placeholder"), this.label ? this.removeAttribute("no-label") : this.setAttribute("no-label", "");
  }
  // Form API
  formResetCallback() {
    this.value = "", this._touched = !1, this._dirty = !1, this.removeAttribute("touched"), this.removeAttribute("dirty");
  }
  formDisabledCallback(e) {
    this.disabled = e;
  }
};
Tt.styles = [y, _t, pn], Tt.formAssociated = !0;
let A = Tt;
z([
  q(".input-box, .input-textarea")
], A.prototype, "inputElement", 2);
z([
  a({ type: String })
], A.prototype, "type", 2);
z([
  a({ type: String })
], A.prototype, "label", 2);
z([
  a({ type: String })
], A.prototype, "placeholder", 2);
z([
  a({ type: String })
], A.prototype, "hint", 2);
z([
  a({ type: String })
], A.prototype, "value", 1);
z([
  a({ type: String })
], A.prototype, "name", 2);
z([
  a({ type: String })
], A.prototype, "id", 2);
z([
  a({ type: Boolean, reflect: !0 })
], A.prototype, "disabled", 1);
z([
  a({ type: Boolean, reflect: !0 })
], A.prototype, "readonly", 1);
z([
  a({ type: Boolean, reflect: !0 })
], A.prototype, "required", 1);
z([
  a({ type: Boolean })
], A.prototype, "autofocus", 1);
z([
  a({ type: String })
], A.prototype, "autocomplete", 2);
z([
  a({ type: String, reflect: !0 })
], A.prototype, "appearance", 2);
z([
  a({ type: String, reflect: !0 })
], A.prototype, "size", 2);
z([
  a({ type: Boolean, reflect: !0, attribute: "marginless" })
], A.prototype, "marginless", 1);
z([
  a({ type: Boolean })
], A.prototype, "withHint", 1);
z([
  a({ type: Boolean, attribute: "password-toggle-enabled" })
], A.prototype, "passwordToggleEnabled", 1);
z([
  a({ type: Number })
], A.prototype, "min", 2);
z([
  a({ type: Number })
], A.prototype, "max", 2);
z([
  a({ type: Number })
], A.prototype, "minlength", 2);
z([
  a({ type: Number })
], A.prototype, "maxlength", 2);
z([
  a({ type: Number, attribute: "textarea-rows" })
], A.prototype, "textareaRows", 2);
z([
  a({ type: String, attribute: "required-indicator" })
], A.prototype, "requiredIndicator", 2);
z([
  a({ type: Number })
], A.prototype, "tabindex", 2);
z([
  b()
], A.prototype, "_focused", 2);
z([
  b()
], A.prototype, "_passwordVisible", 2);
z([
  b()
], A.prototype, "_touched", 2);
z([
  b()
], A.prototype, "_dirty", 2);
z([
  b()
], A.prototype, "_invalid", 2);
customElements.get(zs) || customElements.define(zs, A);
const gn = [
  y,
  _t,
  f`
    :host {
      --swim-dialog-bg: var(--grey-800);
      --swim-dialog-header-color: var(--grey-100);
      --swim-dialog-body-color: var(--grey-200);
    }

    .swim-dialog {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      inset: 0;
      width: 100%;
      height: 100vh;
      pointer-events: none;
      z-index: var(--swim-dialog-z, 991);
    }

    /* Matches ngx-overlay: black at 80% opacity when active */
    .swim-dialog__backdrop {
      position: absolute;
      inset: 0;
      background-color: var(--black);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.1s ease-in;
    }

    .swim-dialog.swim-dialog--open .swim-dialog__backdrop {
      opacity: 0.8;
    }

    .swim-dialog__content {
      pointer-events: auto;
      position: relative;
      border-radius: var(--radius-8);
      box-shadow: var(--shadow-3);
      background: var(--swim-dialog-bg);
      padding: 1.4rem;
      min-width: 250px;
      font-size: var(--font-size-m);
      color: var(--swim-dialog-body-color);
      animation-fill-mode: forwards;
      opacity: 0;
      transform: scale3d(1.2, 1.2, 1);
      transition: opacity 0.2s ease-out, transform 0.2s ease-out;
      z-index: calc(var(--swim-dialog-z, 991) + 1);
    }

    .swim-dialog.swim-dialog--open .swim-dialog__content {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }

    .swim-dialog__content--large,
    .swim-dialog__content--medium {
      padding: var(--spacing-0);
      width: calc(100vw - 120px);
      background-color: transparent;
    }

    .swim-dialog__content--large {
      height: calc(100vh - 120px);
      max-height: calc(100vh - 120px);
      border-radius: var(--radius-64);
      display: flex;
      flex-direction: column;
    }

    .swim-dialog__content--large .swim-dialog__body {
      flex: 1 1 auto;
      min-height: 0;
      max-height: none;
    }

    .swim-dialog__content--medium {
      height: auto;
      min-height: 340px;
      max-height: 75vh;
      max-width: 900px;
      border-radius: var(--radius-64);
      display: flex;
      flex-direction: column;
    }

    .swim-dialog__content--medium .swim-dialog__body {
      flex: 1 1 auto;
      min-height: 0;
      max-height: none;
    }

    .swim-dialog__close {
      position: absolute;
      font-size: var(--font-size-s);
      color: var(--grey-400);
      right: 1rem;
      top: 1rem;
      background: none;
      border: none;
      padding: 0.25rem;
      cursor: pointer;
      line-height: 1;
      border-radius: var(--radius-4);
    }

    .swim-dialog__close:hover,
    .swim-dialog__close:active {
      color: var(--white);
    }

    .swim-dialog__close:focus-visible {
      outline: 2px solid var(--blue-500);
      outline-offset: 2px;
    }

    .swim-dialog__header {
      margin: 0 0 1.4rem 0;
    }

    .swim-dialog__title,
    .swim-dialog__header h1,
    .swim-dialog__header h2 {
      font-size: var(--font-size-3xl);
      font-weight: 400;
      margin: 0 0 1.4rem 0;
      color: var(--swim-dialog-header-color);
    }

    .swim-dialog__content--medium .swim-dialog__header,
    .swim-dialog__content--large .swim-dialog__header {
      border-top-left-radius: var(--radius-64);
      border-top-right-radius: var(--radius-64);
    }

    .swim-dialog__body {
      margin: 0;
      max-height: calc(100vh - 12rem);
      min-height: 0;
    }

    .swim-dialog__footer {
      text-align: right;
      margin-top: 1.4rem;
    }

    .swim-dialog__footer .btn,
    .swim-dialog__footer swim-button {
      margin-left: var(--spacing-4);
    }

    /* Full screen variant (class="swim-dialog--full-screen" on host or wrapper) */
    :host(.swim-dialog--full-screen) .swim-dialog,
    .swim-dialog.swim-dialog--full-screen {
      width: 100vw;
      height: 100%;
      overflow-y: auto;
    }

    :host(.swim-dialog--full-screen) .swim-dialog__content,
    .swim-dialog.swim-dialog--full-screen .swim-dialog__content {
      box-shadow: none;
      width: 100%;
      min-height: 100vh;
    }

    :host(.swim-dialog--full-screen) .swim-dialog__close,
    .swim-dialog.swim-dialog--full-screen .swim-dialog__close {
      right: 1rem;
      top: 2rem;
    }

    /* Wizard / custom header-footer variant (class="wizard" on root) - style slotted header/footer */
    .swim-dialog.wizard .swim-dialog__content {
      padding: var(--spacing-0);
      background: var(--grey-725);
    }

    .swim-dialog.wizard .swim-dialog__body slot::slotted(.swim-dialog__header) {
      padding: 1.4rem;
      background: var(--grey-750);
      border-top-left-radius: var(--radius-16);
      border-top-right-radius: var(--radius-16);
      margin: 0;
      display: block;
    }

    .swim-dialog.wizard .swim-dialog__body slot::slotted(.swim-dialog__footer) {
      padding: 1.4rem;
      margin-top: 0;
      display: block;
    }
  `
];
var nt = /* @__PURE__ */ ((o) => (o.Regular = "regular", o.Medium = "medium", o.Large = "large", o))(nt || {}), fn = Object.defineProperty, _n = Object.getOwnPropertyDescriptor, V = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? _n(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && fn(e, t, s), s;
};
const Ss = "swim-dialog", Ei = class Ei extends _ {
  constructor() {
    super(...arguments), this.dialogTitle = "", this.content = "", this.class = "", this.cssClass = "", this.format = nt.Regular, this.showBackdrop = !0, this._closeButton = !0, this._visible = !1, this._zIndex = 991, this._contentId = `swim-dialog-content-${Math.random().toString(36).slice(2, 11)}`, this._titleId = `swim-dialog-title-${Math.random().toString(36).slice(2, 11)}`, this._previousActiveElement = null;
  }
  get title() {
    return this.dialogTitle;
  }
  set title(e) {
    e && (this.dialogTitle = e);
  }
  get closeButton() {
    return this._closeButton;
  }
  set closeButton(e) {
    this._closeButton = p(e);
  }
  get visible() {
    return this._visible;
  }
  set visible(e) {
    const t = p(e);
    this._visible !== t && (this._visible = t, t ? (this._previousActiveElement = typeof document < "u" ? document.activeElement : null, this.dispatchEvent(new CustomEvent("open", { bubbles: !0 }))) : (this._restoreFocus(), this.dispatchEvent(new CustomEvent("close", { detail: void 0, bubbles: !0 }))));
  }
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(e) {
    this._zIndex = S(e, 991);
  }
  get _contentzIndex() {
    return this.zIndex + 1;
  }
  get _canClose() {
    return this.beforeClose ? this.beforeClose() : !0;
  }
  _restoreFocus() {
    this._previousActiveElement && typeof this._previousActiveElement.focus == "function" && this._previousActiveElement.focus(), this._previousActiveElement = null;
  }
  /** Show the dialog */
  show() {
    this.visible = !0;
  }
  /** Hide the dialog (respects beforeClose) */
  hide() {
    this._canClose && (this.visible = !1);
  }
  firstUpdated() {
    this.visible && this._contentEl && this._contentEl.focus({ preventScroll: !0 });
  }
  updated(e) {
    e.has("visible") && this.visible && this._contentEl && requestAnimationFrame(() => {
      var t;
      (t = this._contentEl) == null || t.focus({ preventScroll: !0 });
    });
  }
  render() {
    if (!this.visible) return u;
    const e = this.format === nt.Regular || this.format === "regular", t = this.format === nt.Large || this.format === "large", i = this.format === nt.Medium || this.format === "medium", s = [
      "swim-dialog__content",
      this.cssClass,
      t ? "swim-dialog__content--large" : "",
      i ? "swim-dialog__content--medium" : ""
    ].filter(Boolean).join(" "), r = this.class.includes("swim-dialog--full-screen"), n = ["swim-dialog", "swim-dialog--open", this.class, r ? "swim-scroll" : ""].filter(Boolean).join(" ");
    return c`
      <div class="${n}" style="--swim-dialog-z: ${this.zIndex}" role="presentation">
        ${this.showBackdrop ? c`<div class="swim-dialog__backdrop" aria-hidden="true"></div>` : u}
        <div
          part="content"
          class="${s}"
          style="z-index: ${this._contentzIndex}"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          aria-labelledby="${this.dialogTitle ? this._titleId : u}"
          id="${this._contentId}"
        >
          ${e ? c`
                ${this.closeButton ? c`
                      <button
                        part="close-button"
                        type="button"
                        class="swim-dialog__close"
                        aria-label="Close dialog"
                        @click="${this.hide}"
                      >
                        <swim-icon font-icon="x"></swim-icon>
                      </button>
                    ` : u}
                ${this.dialogTitle ? c`
                      <div class="swim-dialog__header">
                        <h2 id="${this._titleId}" class="swim-dialog__title">${this.dialogTitle}</h2>
                      </div>
                    ` : u}
                <div class="swim-dialog__body swim-scroll">
                  <slot></slot>
                  ${this.content ? c`<div>${this.content}</div>` : u}
                </div>
              ` : c`
                <div class="swim-dialog__body swim-scroll">
                  <slot></slot>
                  ${this.content ? c`<div>${this.content}</div>` : u}
                </div>
              `}
        </div>
      </div>
    `;
  }
};
Ei.styles = gn;
let $ = Ei;
V([
  a({ type: String, attribute: "dialog-title" })
], $.prototype, "dialogTitle", 2);
V([
  a({ type: String })
], $.prototype, "title", 1);
V([
  a({ type: String })
], $.prototype, "content", 2);
V([
  a({ type: String })
], $.prototype, "class", 2);
V([
  a({ type: String, attribute: "css-class" })
], $.prototype, "cssClass", 2);
V([
  a({ type: String, reflect: !0 })
], $.prototype, "format", 2);
V([
  a({
    type: Boolean,
    attribute: "show-backdrop",
    reflect: !0,
    converter: {
      fromAttribute: (o) => o === null ? !0 : o !== "false" && o !== "0",
      toAttribute: (o) => o ? "" : "false"
    }
  })
], $.prototype, "showBackdrop", 2);
V([
  a({ type: Boolean, attribute: "close-button" })
], $.prototype, "closeButton", 1);
V([
  a({ type: Boolean, reflect: !0 })
], $.prototype, "visible", 1);
V([
  a({ type: Number })
], $.prototype, "zIndex", 1);
V([
  a({ attribute: !1 })
], $.prototype, "beforeClose", 2);
V([
  b()
], $.prototype, "_contentId", 2);
V([
  b()
], $.prototype, "_titleId", 2);
V([
  q(".swim-dialog__content")
], $.prototype, "_contentEl", 2);
customElements.get(Ss) || customElements.define(Ss, $);
const wn = f`
  :host {
    position: relative;
    display: block;
    max-width: 100%;
  }

  :host([autosize]) {
    display: inline-block;
  }

  /* ------------------------------------------------------------------ */
  /* Container                                                          */
  /* ------------------------------------------------------------------ */

  .swim-date-time__container {
    position: relative;
  }

  /* Ensure the inner swim-input leaves space for the calendar button */
  .swim-date-time__container swim-input {
    --swim-input-padding-right: 28px;
  }

  /* Override swim-input display when host is autosize */
  :host([autosize]) .swim-date-time__container swim-input {
    display: inline-block;
  }

  /* ------------------------------------------------------------------ */
  /* Calendar / clock button                                            */
  /* ------------------------------------------------------------------ */

  .swim-date-time__calendar-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: 0;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--grey-200);
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 2;
    font-size: var(--font-size-m);
    line-height: 1;
  }

  .swim-date-time__calendar-btn:hover {
    color: var(--grey-050);
  }

  .swim-date-time__calendar-btn:disabled {
    color: var(--grey-400);
    cursor: not-allowed;
    pointer-events: none;
  }

  .swim-date-time__calendar-btn:focus-visible {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
    border-radius: var(--radius-2);
  }

  /* No-label adjustment (button at top instead of center) */
  :host(:not([has-label])) .swim-date-time__calendar-btn {
    top: 0.5rem;
    transform: translateY(0);
  }

  /* Fill appearance */
  :host([appearance='fill']) .swim-date-time__calendar-btn {
    right: 10px;
  }

  /* Autosize: tweak vertical alignment */
  :host([autosize]) .swim-date-time__calendar-btn {
    transform: translateY(-25%);
  }

  :host([autosize][appearance='fill']) .swim-date-time__calendar-btn {
    transform: translateY(-15%);
  }

  :host([autosize][marginless]) .swim-date-time__calendar-btn {
    transform: translateY(-35%);
  }

  :host([autosize]:not([has-label])) .swim-date-time__calendar-btn {
    transform: translateY(0);
  }

  /* ------------------------------------------------------------------ */
  /* Invalid / out-of-range state                                       */
  /* ------------------------------------------------------------------ */

  :host([date-invalid]) swim-input,
  :host([date-out-of-range]) swim-input {
    --swim-input-underline-color: var(--red-500);
    --swim-input-label-color: var(--red-500);
    --swim-input-hint-color: var(--red-500);
    --swim-input-caret-color: var(--red-500);
  }

  /* Force invalid styling on the inner input via attribute forwarding */
  :host([date-invalid]) swim-input,
  :host([date-out-of-range]) swim-input {
    color: inherit;
  }

  /* ------------------------------------------------------------------ */
  /* Dialog: override swim-dialog content padding                        */
  /* ------------------------------------------------------------------ */

  swim-dialog::part(content) {
    padding: 0 !important;
    width: auto;
    min-width: auto;
    background: transparent;
    box-shadow: none;
    border-radius: 0;
  }

  .swim-date-time__dialog {
    padding: 0;
    width: auto;
  }

  /* ------------------------------------------------------------------ */
  /* Selected header                                                     */
  /* ------------------------------------------------------------------ */

  .swim-date-time__dialog-header {
    border-top: 1px solid var(--grey-700);
    border-left: 1px solid var(--grey-700);
    border-right: 1px solid var(--grey-700);
    border-top-left-radius: var(--radius-6);
    border-top-right-radius: var(--radius-6);
    padding: 4px 20px;
    background: var(--grey-800);
    color: var(--grey-100);
    text-align: center;
  }

  .swim-date-time__dialog-header h1 {
    font-size: 1.2rem;
    white-space: nowrap;
    margin: 0.5rem 0;
    font-weight: normal;
  }

  .swim-date-time__dialog-header h1 small {
    color: var(--grey-100);
  }

  /* ------------------------------------------------------------------ */
  /* Calendar inside dialog                                              */
  /* ------------------------------------------------------------------ */

  .swim-date-time__dialog swim-calendar {
    box-shadow: none;
    border-radius: 0;
    border: none;
    border-left: 1px solid var(--grey-700);
    border-right: 1px solid var(--grey-700);
    border-bottom: 1px solid var(--grey-700);
    display: block;
    width: auto;
  }

  /* ------------------------------------------------------------------ */
  /* Time row                                                            */
  /* ------------------------------------------------------------------ */

  .swim-date-time__time-row {
    background: var(--grey-800);
    border-left: 1px solid var(--grey-700);
    border-right: 1px solid var(--grey-700);
    border-bottom: 1px solid var(--grey-700);
    padding: 8px 16px;
    margin-top: 0;
    height: 94px;
    flex-direction: row;
    box-sizing: border-box;
    display: flex;
    place-content: stretch center;
    align-items: baseline;
    justify-content: space-between;
  }

  .swim-date-time__time-row > * {
    flex: 0 0 calc(15% - 6px);
  }

  .swim-date-time__time-input {
    width: 42px;
    padding: 4px 2px;
    text-align: center;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--grey-400);
    color: var(--grey-050);
    font-size: var(--font-size-m);
    font-family: inherit;
    outline: none;
  }

  .swim-date-time__time-input:focus {
    border-bottom-color: var(--blue-400);
  }

  .swim-date-time__time-input:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .swim-date-time__time-input--ms {
    width: 55px;
  }

  .swim-date-time__time-hint {
    font-size: var(--font-size-xxs);
    color: var(--grey-400);
    text-align: center;
    margin-top: 2px;
  }

  .swim-date-time__time-field {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .swim-date-time__ampm-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .swim-date-time__ampm {
    background: none;
    border: none;
    color: var(--grey-500);
    cursor: pointer;
    padding: 2px 6px;
    font-size: var(--font-size-s);
    font-family: inherit;
    border-radius: var(--radius-2);
  }

  .swim-date-time__ampm:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .swim-date-time__ampm.selected {
    color: var(--white);
    background-color: rgba(var(--grey-350-rgb), 0.2);
  }

  /* ------------------------------------------------------------------ */
  /* Dialog footer (Current / Clear / Apply)                            */
  /* ------------------------------------------------------------------ */

  .swim-date-time__dialog-footer {
    background: var(--grey-800);
    border: 1px solid var(--grey-700);
    border-bottom-left-radius: var(--radius-6);
    border-bottom-right-radius: var(--radius-6);
    border-top: 0;
    padding: 0.5rem 0;
    flex-direction: row;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  .swim-date-time__dialog-footer > * {
    flex: 1 1 50%;
  }

  .swim-date-time__dialog-footer .text-left {
    text-align: left;
  }

  .swim-date-time__dialog-footer .text-right {
    text-align: right;
  }

  .swim-date-time__footer-btn {
    font-size: var(--font-size-m);
    color: var(--grey-400);
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  .swim-date-time__footer-btn:hover {
    color: var(--grey-200);
  }

  .swim-date-time__footer-btn--current {
    margin-left: 16px;
    opacity: 1;
    transition: opacity 200ms;
  }

  .swim-date-time__footer-btn--current[hidden] {
    display: inline-block !important;
    opacity: 0;
    pointer-events: none;
  }

  .swim-date-time__footer-btn--apply {
    margin-right: 16px;
    color: var(--blue-400);
  }

  .swim-date-time__footer-btn--apply:hover {
    color: var(--blue-300);
  }

  .swim-date-time__footer-btn--clear {
    margin-right: 16px;
  }
`;
var vn = Object.defineProperty, yn = Object.getOwnPropertyDescriptor, x = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? yn(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && vn(e, t, s), s;
};
let xn = 0;
const Is = "swim-date-time", Ot = class Ot extends _ {
  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------
  constructor() {
    super(), this.id = `swim-date-time-${++xn}`, this.name = "", this.label = "", this.hint = "", this.placeholder = "", this.size = "sm", this.appearance = "legacy", this._disabled = !1, this._required = !1, this.requiredIndicator = "*", this._autofocus = !1, this._autosize = !1, this._minWidth = 60, this._marginless = !1, this._value = null, this._displayValue = "", this._dateInvalid = !1, this._dateOutOfRange = !1, this._focused = !1, this._dialogOpen = !1, this._dialogModel = null, this._dialogHour = 12, this._dialogMinute = "00", this._dialogSecond = "00", this._dialogMillisecond = "000", this._dialogAmPm = "AM", this._modes = ["millisecond", "second", "minute", "hour", "date", "month", "year"], this._apply = () => {
      this._dialogModel && (this.value = this._dialogModel, this._update(), this.dispatchEvent(new CustomEvent("date-time-selected", { detail: this.value, bubbles: !0, composed: !0 })), this.dispatchEvent(new CustomEvent("change", { detail: this.value, bubbles: !0, composed: !0 }))), this._close();
    }, this._clear = () => {
      this.value = void 0, this._update(), this.dispatchEvent(new CustomEvent("date-time-selected", { detail: void 0, bubbles: !0, composed: !0 })), this.dispatchEvent(new CustomEvent("change", { detail: void 0, bubbles: !0, composed: !0 })), this._close();
    }, this._selectCurrent = () => {
      this._setDialogDate(/* @__PURE__ */ new Date());
    }, this._close = () => {
      this._dialogOpen = !1, this._update();
    }, this._onCalendarChange = (e) => {
      e.stopPropagation();
      const t = e.detail;
      t && B(t) && (this._dialogModel && this._showTime && t.setHours(
        this._dialogModel.getHours(),
        this._dialogModel.getMinutes(),
        this._dialogModel.getSeconds(),
        this._dialogModel.getMilliseconds()
      ), this._setDialogDate(t));
    }, this._onHourChange = (e) => {
      const t = +e.target.value % 12, i = this._dialogAmPm === "PM" ? 12 + t : t;
      if (this._dialogModel) {
        const s = new Date(this._dialogModel);
        s.setHours(i), this._setDialogDate(s);
      }
    }, this._onMinuteChange = (e) => {
      const t = +e.target.value;
      if (this._dialogModel) {
        const i = new Date(this._dialogModel);
        i.setMinutes(t), this._setDialogDate(i);
      }
    }, this._onSecondChange = (e) => {
      const t = +e.target.value;
      if (this._dialogModel) {
        const i = new Date(this._dialogModel);
        i.setSeconds(t), this._setDialogDate(i);
      }
    }, this._onMillisecondChange = (e) => {
      const t = +e.target.value;
      if (this._dialogModel) {
        const i = new Date(this._dialogModel);
        i.setMilliseconds(t), this._setDialogDate(i);
      }
    }, this._onDialogKeyDown = (e) => {
      e.code === "Escape" && (this._close(), e.stopPropagation(), e.preventDefault());
    }, this._internals = this.attachInternals();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    const t = this._disabled;
    this._disabled = p(e), this.requestUpdate("disabled", t);
  }
  get required() {
    return this._required;
  }
  set required(e) {
    const t = this._required;
    this._required = p(e), this.requestUpdate("required", t);
  }
  get autofocus() {
    return this._autofocus;
  }
  set autofocus(e) {
    this._autofocus = p(e);
  }
  get autosize() {
    return this._autosize;
  }
  set autosize(e) {
    const t = this._autosize;
    this._autosize = p(e), this.requestUpdate("autosize", t);
  }
  get minWidth() {
    return this._minWidth;
  }
  set minWidth(e) {
    this._minWidth = S(e) ?? 60;
  }
  set inputType(e) {
    const t = this._inputType;
    this._inputType = e, this.requestUpdate("inputType", t);
  }
  get inputType() {
    return this._effectiveInputType;
  }
  set displayMode(e) {
    const t = this._displayMode;
    this._displayMode = e, this.requestUpdate("displayMode", t);
  }
  get displayMode() {
    return this._effectiveDisplayMode;
  }
  get marginless() {
    return this._marginless;
  }
  set marginless(e) {
    const t = this._marginless;
    this._marginless = p(e), this.requestUpdate("marginless", t);
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    if (typeof e == "string" && (e = e.trim(), e || (e = null)), !e && !this._value) {
      this._value = null;
      return;
    }
    if (e === this._value) return;
    let i = e instanceof Date && B(e);
    if (typeof e == "string") {
      const s = Je(e);
      s && (e = s, i = !0);
    }
    if (i && e instanceof Date && this.precision && (e = ds(e, this.precision)), this._value = e, this._update(), this._internals) {
      const s = this._value instanceof Date ? this._value.toISOString() : String(this._value ?? "");
      this._internals.setFormValue(s);
    }
    this.requestUpdate("value", t);
  }
  // ---------------------------------------------------------------------------
  // Computed helpers
  // ---------------------------------------------------------------------------
  get _effectiveInputType() {
    return this._inputType ? this._inputType : this.precision === "hour" || this.precision === "minute" ? D.datetime : D.date;
  }
  get _effectiveDisplayMode() {
    return this._displayMode ? this._displayMode : this.timezone ? se.TIMEZONE : se.LOCAL;
  }
  get _effectiveFormat() {
    return this.format ? Dr(this.format) : Mr(
      this._effectiveDisplayMode,
      this._effectiveInputType,
      this.precision
    );
  }
  get _iconName() {
    switch (this._effectiveInputType) {
      case D.time:
        return "clock";
      case D.datetime:
        return "calendar-clock";
      default:
        return "calendar";
    }
  }
  get _showCalendar() {
    return this._effectiveInputType === D.date || this._effectiveInputType === D.datetime;
  }
  get _showTime() {
    return this._effectiveInputType === D.time || this._effectiveInputType === D.datetime;
  }
  connectedCallback() {
    super.connectedCallback(), this._update();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  firstUpdated() {
    this.autofocus && this._swimInput && requestAnimationFrame(() => {
      var e, t;
      (t = (e = this._swimInput) == null ? void 0 : e.focus) == null || t.call(e);
    });
  }
  updated(e) {
    super.updated(e), this.label ? this.setAttribute("has-label", "") : this.removeAttribute("has-label"), this._dateInvalid ? this.setAttribute("date-invalid", "") : this.removeAttribute("date-invalid"), this._dateOutOfRange ? this.setAttribute("date-out-of-range", "") : this.removeAttribute("date-out-of-range"), this._focused ? this.setAttribute("focused", "") : this.removeAttribute("focused"), (e.has("format") || e.has("precision") || e.has("timezone") || e.has("displayMode") || e.has("inputType")) && this._update(), (e.has("required") || e.has("minDate") || e.has("maxDate")) && this._validate();
  }
  /** Delegate focus to the inner input. */
  focus(e) {
    var t, i;
    (i = (t = this._swimInput) == null ? void 0 : t.focus) == null || i.call(t, e);
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  render() {
    return c`
      <div class="swim-date-time__container">
        <swim-input
          part="input"
          .id="${this.id + "-input"}"
          .name="${this.name}"
          .label="${this.label}"
          .hint="${this.hint}"
          .placeholder="${this.placeholder}"
          .size="${this.size}"
          .appearance="${this.appearance}"
          .disabled="${this.disabled}"
          .required="${this.required}"
          .requiredIndicator="${String(this.requiredIndicator)}"
          .value="${this._displayValue}"
          ?marginless="${this.marginless}"
          tabindex="${ge(this.tabindex)}"
          autocomplete="off"
          @input="${this._handleInput}"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @keydown="${this._handleKeyDown}"
        ></swim-input>

        <button
          part="calendar-btn"
          class="swim-date-time__calendar-btn"
          type="button"
          ?disabled="${this.disabled}"
          @click="${this._openPicker}"
          title="Show date/time selector"
          aria-label="Open ${this._effectiveInputType} picker"
        >
          <swim-icon font-icon="${this._iconName}"></swim-icon>
        </button>
      </div>

      ${this._renderDialog()}
    `;
  }
  _renderDialog() {
    const e = this._getDialogHeaderText();
    return c`
      <swim-dialog
        css-class="ngx-date-time-dialog"
        .closeButton="${!1}"
        .visible="${this._dialogOpen}"
        @close="${this._close}"
      >
        <div class="swim-date-time__dialog" @keydown="${this._onDialogKeyDown}">
          <div class="swim-date-time__dialog-header">
            <h1>${e}</h1>
          </div>

          ${this._showCalendar ? c`
                <swim-calendar
                  .value="${this._dialogModel}"
                  .minDate="${this.minDate}"
                  .maxDate="${this.maxDate}"
                  .disabled="${this.disabled}"
                  min-view="${this._calendarMinView}"
                  @change="${this._onCalendarChange}"
                  @day-key-enter="${this._apply}"
                ></swim-calendar>
              ` : u}
          ${this._showTime ? this._renderTimeRow() : u}

          <nav role="navigation" class="swim-date-time__dialog-footer">
            <div class="text-left">
              <button
                type="button"
                class="swim-date-time__footer-btn swim-date-time__footer-btn--current"
                ?hidden="${this._isCurrent()}"
                @click="${this._selectCurrent}"
              >
                Current
              </button>
            </div>
            <div class="text-right">
              <button
                type="button"
                class="swim-date-time__footer-btn swim-date-time__footer-btn--clear"
                @click="${this._clear}"
              >
                Clear
              </button>
              <button
                type="button"
                class="swim-date-time__footer-btn swim-date-time__footer-btn--apply"
                @click="${this._apply}"
              >
                Apply
              </button>
            </div>
          </nav>
        </div>
      </swim-dialog>
    `;
  }
  _renderTimeRow() {
    const e = this._isTimeDisabled("hour"), t = this._isTimeDisabled("minute"), i = this._isTimeDisabled("second"), s = this._isTimeDisabled("millisecond");
    return c`
      <div class="swim-date-time__time-row">
        <div class="swim-date-time__time-field">
          <input
            type="number"
            class="swim-date-time__time-input"
            .value="${String(this._dialogHour)}"
            min="1"
            max="12"
            ?disabled="${e}"
            @change="${this._onHourChange}"
          />
          <div class="swim-date-time__time-hint">Hour</div>
        </div>
        <div class="swim-date-time__time-field">
          <input
            type="number"
            class="swim-date-time__time-input"
            .value="${this._dialogMinute}"
            min="0"
            max="59"
            ?disabled="${t}"
            @change="${this._onMinuteChange}"
          />
          <div class="swim-date-time__time-hint">Minute</div>
        </div>
        <div class="swim-date-time__time-field">
          <input
            type="number"
            class="swim-date-time__time-input"
            .value="${this._dialogSecond}"
            min="0"
            max="59"
            ?disabled="${i}"
            @change="${this._onSecondChange}"
          />
          <div class="swim-date-time__time-hint">Second</div>
        </div>
        <div class="swim-date-time__time-field">
          <input
            type="number"
            class="swim-date-time__time-input swim-date-time__time-input--ms"
            .value="${this._dialogMillisecond}"
            min="0"
            max="999"
            ?disabled="${s}"
            @change="${this._onMillisecondChange}"
          />
          <div class="swim-date-time__time-hint">Millisecond</div>
        </div>
        <div class="swim-date-time__ampm-group">
          <button
            type="button"
            class="swim-date-time__ampm ${this._dialogAmPm === "AM" ? "selected" : ""}"
            ?disabled="${e}"
            @click="${() => this._onAmPmChange("AM")}"
          >
            AM
          </button>
          <button
            type="button"
            class="swim-date-time__ampm ${this._dialogAmPm === "PM" ? "selected" : ""}"
            ?disabled="${e}"
            @click="${() => this._onAmPmChange("PM")}"
          >
            PM
          </button>
        </div>
      </div>
    `;
  }
  // ---------------------------------------------------------------------------
  // Dialog helpers
  // ---------------------------------------------------------------------------
  get _calendarMinView() {
    return this.precision === "month" ? "month" : this.precision === "year" ? "year" : "date";
  }
  _getDialogHeaderText() {
    if (!this._dialogModel)
      return "No value";
    const e = this._effectiveInputType, t = Zt(this.timezone);
    if (e === D.time)
      return st(this._dialogModel, "h:mm a", t);
    if (e === D.datetime) {
      const i = st(this._dialogModel, "ddd, MMM D YYYY", t), s = st(this._dialogModel, "h:mm a", t);
      return c`${i} <small>${s}</small>`;
    }
    return st(this._dialogModel, "ddd, MMM D YYYY", t);
  }
  _setDialogDate(e) {
    this._dialogModel = new Date(e);
    const t = this._dialogModel.getHours();
    this._dialogHour = t % 12 || 12, this._dialogMinute = String(this._dialogModel.getMinutes()).padStart(2, "0"), this._dialogSecond = String(this._dialogModel.getSeconds()).padStart(2, "0"), this._dialogMillisecond = String(this._dialogModel.getMilliseconds()).padStart(3, "0"), this._dialogAmPm = t >= 12 ? "PM" : "AM";
  }
  _isTimeDisabled(e) {
    return this.precision ? this._modes.indexOf(this.precision) > this._modes.indexOf(e) : !1;
  }
  _isCurrent() {
    if (!this._dialogModel) return !1;
    const e = /* @__PURE__ */ new Date(), t = this._effectiveInputType;
    return t === D.time ? e.getHours() === this._dialogModel.getHours() && e.getMinutes() === this._dialogModel.getMinutes() && e.getSeconds() === this._dialogModel.getSeconds() && e.getMilliseconds() === this._dialogModel.getMilliseconds() : t === D.datetime ? e.getFullYear() === this._dialogModel.getFullYear() && e.getMonth() === this._dialogModel.getMonth() && e.getDate() === this._dialogModel.getDate() && e.getHours() === this._dialogModel.getHours() && e.getMinutes() === this._dialogModel.getMinutes() && e.getSeconds() === this._dialogModel.getSeconds() && e.getMilliseconds() === this._dialogModel.getMilliseconds() : e.getFullYear() === this._dialogModel.getFullYear() && e.getMonth() === this._dialogModel.getMonth() && e.getDate() === this._dialogModel.getDate();
  }
  // ---------------------------------------------------------------------------
  // Dialog actions
  // ---------------------------------------------------------------------------
  _openPicker() {
    if (this.disabled || this._dialogOpen) return;
    const e = this._value instanceof Date && B(this._value) ? this._value : /* @__PURE__ */ new Date();
    this._setDialogDate(e), this._dialogOpen = !0;
  }
  _onAmPmChange(e) {
    if (!this._dialogModel) return;
    const t = new Date(this._dialogModel), i = t.getHours();
    e === "AM" && this._dialogAmPm === "PM" ? t.setHours(i - 12) : e === "PM" && this._dialogAmPm === "AM" && t.setHours(i + 12), this._setDialogDate(t);
  }
  // ---------------------------------------------------------------------------
  // Input event handlers
  // ---------------------------------------------------------------------------
  _handleInput(e) {
    e.stopPropagation();
    const i = e.target.value;
    this._displayValue = i;
    const s = Je(i), r = this._value;
    if (s) {
      const n = this.precision ? ds(s, this.precision) : s;
      this._value = n, this._dateInvalid = !1;
    } else i ? (this._value = i, this._dateInvalid = !0) : (this._value = null, this._dateInvalid = !1);
    this._dateOutOfRange = !this._dateInvalid && this._value instanceof Date ? hs(this._value, this.minDate, this.maxDate) : !1, this._updateFormValue(), this.dispatchEvent(new CustomEvent("input-change", { detail: this._value, bubbles: !0, composed: !0 })), this._value !== r && this.dispatchEvent(new CustomEvent("value-change", { detail: this._value, bubbles: !0, composed: !0 })), !this._dateInvalid && this._value !== r && this.dispatchEvent(new CustomEvent("change", { detail: this._value, bubbles: !0, composed: !0 }));
  }
  _handleFocus(e) {
    e.stopPropagation(), this._focused = !0, this.dispatchEvent(new FocusEvent("focus", { bubbles: !0, composed: !0 }));
  }
  _handleBlur(e) {
    e.stopPropagation(), this._focused = !1, this._update(), !this._dateInvalid && this._swimInput && this._swimInput.value !== this._displayValue && (this._swimInput.value = this._displayValue), this.dispatchEvent(new FocusEvent("blur", { bubbles: !0, composed: !0 }));
  }
  _handleKeyDown(e) {
    e.code === "ArrowDown" ? (e.preventDefault(), this._openPicker()) : e.code === "Escape" && (this._dialogOpen && this._close(), e.stopPropagation());
  }
  // ---------------------------------------------------------------------------
  // Internal helpers
  // ---------------------------------------------------------------------------
  _update() {
    const e = this._value, t = e instanceof Date && B(e);
    if (this._dateInvalid = !!e && !t, this._displayValue = e ? String(e) : "", this._dateOutOfRange = !1, !t) return;
    const i = Zt(this.timezone);
    this._displayValue = st(e, this._effectiveFormat, i), this._dateOutOfRange = hs(e, this.minDate, this.maxDate);
  }
  _validate() {
    let e = {}, t = "";
    this._required && !this._value ? (e = { valueMissing: !0 }, t = "A value is required.") : this._dateInvalid ? (e = { typeMismatch: !0 }, t = "Invalid date.") : this._dateOutOfRange && (e = { rangeOverflow: !0 }, t = "Date is out of the allowed range."), t ? this._internals.setValidity(e, t) : this._internals.setValidity({});
  }
  _updateFormValue() {
    if (!this._internals) return;
    const e = this._value;
    e instanceof Date && B(e) ? this._internals.setFormValue(e.toISOString()) : this._internals.setFormValue(String(e ?? "")), this._validate();
  }
  // ---------------------------------------------------------------------------
  // Form callbacks
  // ---------------------------------------------------------------------------
  formResetCallback() {
    this._value = null, this._displayValue = "", this._dateInvalid = !1, this._dateOutOfRange = !1, this._internals.setFormValue(""), this._internals.setValidity({}), this.requestUpdate();
  }
  formDisabledCallback(e) {
    this.disabled = e;
  }
};
Ot.styles = [y, wn], Ot.formAssociated = !0;
let v = Ot;
x([
  q("swim-input")
], v.prototype, "_swimInput", 2);
x([
  a({ type: String })
], v.prototype, "id", 2);
x([
  a({ type: String })
], v.prototype, "name", 2);
x([
  a({ type: String })
], v.prototype, "label", 2);
x([
  a({ type: String })
], v.prototype, "hint", 2);
x([
  a({ type: String })
], v.prototype, "placeholder", 2);
x([
  a({ type: String, reflect: !0 })
], v.prototype, "size", 2);
x([
  a({ type: String, reflect: !0 })
], v.prototype, "appearance", 2);
x([
  a({ type: Boolean, reflect: !0 })
], v.prototype, "disabled", 1);
x([
  a({ type: Boolean, reflect: !0 })
], v.prototype, "required", 1);
x([
  a({ type: String, attribute: "required-indicator" })
], v.prototype, "requiredIndicator", 2);
x([
  a({ type: Boolean })
], v.prototype, "autofocus", 1);
x([
  a({ type: Boolean, reflect: !0 })
], v.prototype, "autosize", 1);
x([
  a({ type: Number, attribute: "min-width" })
], v.prototype, "minWidth", 1);
x([
  a({ type: Number })
], v.prototype, "tabindex", 2);
x([
  a({ type: String, attribute: "input-type" })
], v.prototype, "inputType", 1);
x([
  a({ type: String })
], v.prototype, "precision", 2);
x([
  a({ type: String })
], v.prototype, "timezone", 2);
x([
  a({ type: String, attribute: "display-mode" })
], v.prototype, "displayMode", 1);
x([
  a({ type: String })
], v.prototype, "format", 2);
x([
  a({ type: Boolean, reflect: !0 })
], v.prototype, "marginless", 1);
x([
  a({ attribute: "min-date" })
], v.prototype, "minDate", 2);
x([
  a({ attribute: "max-date" })
], v.prototype, "maxDate", 2);
x([
  a({ attribute: !1 })
], v.prototype, "value", 1);
x([
  b()
], v.prototype, "_displayValue", 2);
x([
  b()
], v.prototype, "_dateInvalid", 2);
x([
  b()
], v.prototype, "_dateOutOfRange", 2);
x([
  b()
], v.prototype, "_focused", 2);
x([
  b()
], v.prototype, "_dialogOpen", 2);
x([
  b()
], v.prototype, "_dialogModel", 2);
x([
  b()
], v.prototype, "_dialogHour", 2);
x([
  b()
], v.prototype, "_dialogMinute", 2);
x([
  b()
], v.prototype, "_dialogSecond", 2);
x([
  b()
], v.prototype, "_dialogMillisecond", 2);
x([
  b()
], v.prototype, "_dialogAmPm", 2);
customElements.get(Is) || customElements.define(Is, v);
const kn = [
  y,
  f`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      --swim-format-dialog-bg: var(--grey-800);
      --swim-format-header-height-large: 90px;
      --swim-format-header-height-medium: 60px;
      --swim-format-footer-height: 4rem;
      --swim-format-body-padding: 2rem;
      --swim-format-border: 2px solid var(--grey-700);
    }

    .format-dialog-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: var(--swim-format-max-height, 75vh);
      background: var(--swim-format-dialog-bg);
      box-shadow: 0 0 100px rgba(0, 0, 0, 0.25);
      border-radius: var(--radius-16);
      overflow: hidden;
    }

    :host([format='large']) .format-dialog-container {
      --swim-format-max-height: calc(100vh - 7.25rem);
      --swim-format-header-height: var(--swim-format-header-height-large);
    }

    :host([format='medium']) .format-dialog-container {
      --swim-format-max-height: 75vh;
      --swim-format-header-height: var(--swim-format-header-height-medium);
      --swim-format-body-max-height: calc(var(--swim-format-max-height) - var(--swim-format-header-height));
    }

    .format-dialog-container__header {
      flex: 0 0 var(--swim-format-header-height, 90px);
      height: var(--swim-format-header-height, 90px);
      min-height: var(--swim-format-header-height, 90px);
      border-bottom: var(--swim-format-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 var(--swim-format-body-padding);
      padding-right: 2.5rem;
      gap: 1.5rem;
      overflow: visible;
    }

    /* Match ngx-large-format-dialog-header-title__wrapper: flex 0 0 20%, height 100%, justify-content center */
    .format-dialog-container__header-title {
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 0 0 20%;
      height: 100%;
      min-width: 0;
      max-width: 50%;
      justify-content: center;
    }

    .format-dialog-container__header-title--with-subtitle {
      align-items: flex-start;
    }

    .format-dialog-container__header-title h1 {
      margin: 0;
      color: var(--white);
      font-size: var(--swim-format-title-size, 1.75rem);
      font-weight: 400;
      line-height: var(--swim-format-title-line, 2rem);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .format-dialog-container__header-title h4 {
      margin: 0;
      color: var(--grey-250);
      font-size: var(--font-size-m);
      line-height: 1.5;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    :host([format='medium']) .format-dialog-container__header-title h1 {
      --swim-format-title-size: 1.375rem;
      --swim-format-title-line: 1.625rem;
    }

    .format-dialog-container__header-action {
      flex: 0 0 auto;
      max-width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .format-dialog-container__header-action__button {
      background: none;
      border: none;
      color: var(--grey-400);
      font-size: var(--font-size-s);
      line-height: 1;
      padding: 0.25rem 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .format-dialog-container__header-action__button swim-icon {
      flex-shrink: 0;
      font-size: 1em;
      line-height: 0;
    }

    .format-dialog-container__header-action__button:hover {
      color: var(--white);
    }

    .format-dialog-container__header-action__button:focus-visible {
      outline: 2px solid var(--blue-500);
      outline-offset: 2px;
    }

    .format-dialog-container__body {
      flex: 1 1 auto;
      min-height: 215px;
      padding: 0 var(--swim-format-body-padding);
      color: var(--grey-200);
    }

    :host([format='medium']) .format-dialog-container__body {
      max-height: var(--swim-format-body-max-height, auto);
    }

    .format-dialog-container__footer {
      flex: 0 0 var(--swim-format-footer-height);
      height: var(--swim-format-footer-height);
      min-height: var(--swim-format-footer-height);
      border-top: var(--swim-format-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--swim-format-footer-gap, 0.5rem);
      padding: 0.75rem 2rem;
      box-sizing: border-box;
    }
  `
];
var Cn = Object.defineProperty, Ze = (o, e, t, i) => {
  for (var s = void 0, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = n(e, t, s) || s);
  return s && Cn(e, t, s), s;
};
const Ds = "swim-large-format-dialog-content", zi = class zi extends _ {
  constructor() {
    super(...arguments), this.format = "large", this.dialogTitle = "", this.dialogSubtitle = "", this.dialogActionTitle = "Close", this.dialogDirtyActionTitle = "Cancel", this.dirty = !1;
  }
  _onCloseOrCancel() {
    this.dispatchEvent(new CustomEvent("close-or-cancel", { detail: this.dirty, bubbles: !0, composed: !0 }));
  }
  render() {
    const e = [
      "format-dialog-container__header-title",
      "format-dialog-container__header-title--with-subtitle"
    ].join(" ");
    return c`
      <main class="format-dialog-container">
        <header class="format-dialog-container__header">
          <div class="format-dialog-container__header-title ${e}">
            <h1>${this.dialogTitle}</h1>
            ${this.dialogSubtitle ? c`<h4>${this.dialogSubtitle}</h4>` : u}
          </div>
          <div class="format-dialog-container__header-action">
            <button
              type="button"
              class="format-dialog-container__header-action__button"
              aria-label="${this.dirty ? this.dialogDirtyActionTitle : this.dialogActionTitle}"
              @click="${this._onCloseOrCancel}"
            >
              <swim-icon font-icon="x"></swim-icon>
              ${this.dirty ? this.dialogDirtyActionTitle : this.dialogActionTitle}
            </button>
          </div>
        </header>
        <section class="format-dialog-container__body swim-scroll">
          <slot></slot>
        </section>
        <footer class="format-dialog-container__footer">
          <slot name="footer"></slot>
        </footer>
      </main>
    `;
  }
};
zi.styles = [_t, kn];
let ye = zi;
Ze([
  a({ type: String, reflect: !0 })
], ye.prototype, "format");
Ze([
  a({ type: String, attribute: "dialog-title" })
], ye.prototype, "dialogTitle");
Ze([
  a({ type: String, attribute: "dialog-subtitle" })
], ye.prototype, "dialogSubtitle");
Ze([
  a({ type: String, attribute: "dialog-action-title" })
], ye.prototype, "dialogActionTitle");
Ze([
  a({ type: String, attribute: "dialog-dirty-action-title" })
], ye.prototype, "dialogDirtyActionTitle");
Ze([
  a({ type: Boolean, reflect: !0 })
], ye.prototype, "dirty");
customElements.get(Ds) || customElements.define(Ds, ye);
const An = [
  y,
  f`
    :host {
      --swim-format-footer-gap: 0.5rem;
    }

    .format-dialog-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--swim-format-footer-gap);
      width: 100%;
      height: 100%;
    }
  `
];
var En = Object.defineProperty, zn = (o, e, t, i) => {
  for (var s = void 0, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = n(e, t, s) || s);
  return s && En(e, t, s), s;
};
const Ms = "swim-large-format-dialog-footer", Si = class Si extends _ {
  constructor() {
    super(...arguments), this.format = "large";
  }
  render() {
    return c` <div class="format-dialog-footer"><slot></slot></div> `;
  }
};
Si.styles = An;
let St = Si;
zn([
  a({ type: String, reflect: !0 })
], St.prototype, "format");
customElements.get(Ms) || customElements.define(Ms, St);
const Sn = [
  y,
  _t,
  f`
    :host {
      --swim-drawer-bg: var(--grey-800);
      display: block;
      box-sizing: border-box;
    }

    /* Root drawer: host is a full-viewport overlay wrapper */
    :host(.swim-drawer--root) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: var(--swim-drawer-z, 998);
    }

    :host(.swim-drawer--root) .swim-drawer__backdrop {
      position: absolute;
      inset: 0;
      background-color: var(--black);
      opacity: 0;
      pointer-events: auto;
      transition: opacity 0.15s ease-out;
    }

    :host(.swim-drawer--root.swim-drawer--open) .swim-drawer__backdrop,
    :host(.swim-drawer--root.swim-drawer--closing) .swim-drawer__backdrop {
      opacity: 0.8;
    }

    /* Non-root: host is the panel container (position relative from parent) */
    :host(.swim-drawer--contained) {
      display: block;
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    /* Panel: the sliding drawer */
    .swim-drawer__panel {
      display: block;
      overflow-y: auto;
      overflow-x: hidden;
      text-align: left;
      background: var(--swim-drawer-bg);
      transition: transform 150ms ease-out;
      box-sizing: border-box;
      pointer-events: auto;
    }

    /* Left drawer: slides in from the left edge */
    :host(.swim-drawer--left) .swim-drawer__panel {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      min-width: 200px;
      width: 100%;
    }

    :host(.swim-drawer--left:not(.swim-drawer--open):not(.swim-drawer--closing)) .swim-drawer__panel {
      transform: translateX(-100%);
    }

    :host(.swim-drawer--left.swim-drawer--open) .swim-drawer__panel {
      transform: translateX(0);
    }

    :host(.swim-drawer--left.swim-drawer--closing) .swim-drawer__panel {
      transform: translateX(-100%);
    }

    /* Right drawer: slides in from the right edge */
    :host(.swim-drawer--right) .swim-drawer__panel {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      min-width: 200px;
      width: 100%;
    }

    :host(.swim-drawer--right:not(.swim-drawer--open):not(.swim-drawer--closing)) .swim-drawer__panel {
      transform: translateX(100%);
    }

    :host(.swim-drawer--right.swim-drawer--open) .swim-drawer__panel {
      transform: translateX(0);
    }

    :host(.swim-drawer--right.swim-drawer--closing) .swim-drawer__panel {
      transform: translateX(100%);
    }

    /* Bottom drawer: slides in from bottom */
    :host(.swim-drawer--bottom) .swim-drawer__panel {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      min-height: 150px;
      height: 100%;
    }

    :host(.swim-drawer--bottom:not(.swim-drawer--open):not(.swim-drawer--closing)) .swim-drawer__panel {
      transform: translateY(100%);
    }

    :host(.swim-drawer--bottom.swim-drawer--open) .swim-drawer__panel {
      transform: translateY(0);
    }

    :host(.swim-drawer--bottom.swim-drawer--closing) .swim-drawer__panel {
      transform: translateY(100%);
    }

    .swim-drawer__content {
      height: 100%;
      overflow: auto;
      padding: var(--spacing-16);
    }

    /* Focus visible for accessibility */
    .swim-drawer__panel:focus-visible {
      outline: 2px solid var(--blue-500);
      outline-offset: 2px;
    }
  `
];
var Re = /* @__PURE__ */ ((o) => (o.Left = "left", o.Right = "right", o.Bottom = "bottom", o))(Re || {}), In = Object.defineProperty, Dn = Object.getOwnPropertyDescriptor, pe = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Dn(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && In(e, t, s), s;
};
const Ts = "swim-drawer", Ii = class Ii extends _ {
  constructor() {
    super(...arguments), this.cssClass = "", this.direction = Re.Left, this._size = 80, this._zIndex = 998, this._closeOnOutsideClick = !0, this._isRoot = !0, this._open = !1, this._closing = !1, this._contentId = `swim-drawer-content-${Math.random().toString(36).slice(2, 11)}`, this._previousActiveElement = null, this._backdropClickBound = () => this._onBackdropClick(), this._keydownBound = (e) => this._onKeydown(e), this._portalTarget = null;
  }
  get size() {
    return this._size;
  }
  set size(e) {
    this._size = S(e, 80);
  }
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(e) {
    this._zIndex = S(e, 998);
  }
  get closeOnOutsideClick() {
    return this._closeOnOutsideClick;
  }
  set closeOnOutsideClick(e) {
    this._closeOnOutsideClick = p(e);
  }
  get isRoot() {
    return this._isRoot;
  }
  set isRoot(e) {
    this._isRoot = p(e);
  }
  get open() {
    return this._open;
  }
  set open(e) {
    const t = p(e);
    this._open !== t && (this._open = t, this.requestUpdate(), t ? this._previousActiveElement = typeof document < "u" ? document.activeElement : null : this._restoreFocus());
  }
  get _isLeft() {
    return this.direction === Re.Left || this.direction === "left";
  }
  get _isRight() {
    return this.direction === Re.Right || this.direction === "right";
  }
  get _isBottom() {
    return this.direction === Re.Bottom || this.direction === "bottom";
  }
  get _widthSize() {
    return (this._isLeft || this._isRight) && this.size ? `${this.size}%` : "100%";
  }
  get _heightSize() {
    return this._isBottom && this.size ? `${this.size}%` : "100%";
  }
  get _isVisible() {
    return this.open || this._closing;
  }
  _restoreFocus() {
    this._previousActiveElement && typeof this._previousActiveElement.focus == "function" && this._previousActiveElement.focus(), this._previousActiveElement = null;
  }
  _emitClose() {
    this.dispatchEvent(new CustomEvent("close", { detail: !0, bubbles: !0 }));
  }
  _onBackdropClick() {
    this.closeOnOutsideClick && this.isRoot && this.hide();
  }
  _onKeydown(e) {
    e.key === "Escape" && this.open && (e.preventDefault(), this.hide());
  }
  /** Show the drawer */
  show() {
    this.isRoot && this.parentElement && this.parentElement !== document.body && (this._portalTarget = this.parentElement, document.body.appendChild(this)), this.open = !0;
  }
  /** Hide the drawer (animates out, then emits close event) */
  hide() {
    this._closing || !this.open || (this._closing = !0, this._clearCloseTimeout(), this._closeTimeout = window.setTimeout(() => {
      this._closeTimeout = void 0, this._closing = !1, this.open = !1, this._portalTarget && this._portalTarget.isConnected && this.parentElement === document.body && this._portalTarget.appendChild(this), this._portalTarget = null, this._emitClose();
    }, 150));
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("keydown", this._keydownBound);
  }
  disconnectedCallback() {
    document.removeEventListener("keydown", this._keydownBound), this._clearCloseTimeout(), super.disconnectedCallback();
  }
  _clearCloseTimeout() {
    this._closeTimeout !== void 0 && (clearTimeout(this._closeTimeout), this._closeTimeout = void 0);
  }
  willUpdate() {
    const t = ["swim-drawer", this._isLeft ? "swim-drawer--left" : this._isRight ? "swim-drawer--right" : "swim-drawer--bottom", this.isRoot ? "swim-drawer--root" : "swim-drawer--contained"];
    this.open && !this._closing && t.push("swim-drawer--open"), this._closing && t.push("swim-drawer--closing"), this.cssClass && t.push(...this.cssClass.trim().split(/\s+/).filter(Boolean)), this.className = t.join(" "), this.isRoot && this.style.setProperty("--swim-drawer-z", String(this.zIndex));
  }
  firstUpdated() {
    this.open && this._contentEl && this._contentEl.focus({ preventScroll: !0 });
  }
  updated(e) {
    e.has("open") && this.open && this._contentEl && requestAnimationFrame(() => {
      var t;
      (t = this._contentEl) == null || t.focus({ preventScroll: !0 });
    });
  }
  render() {
    return this._isVisible ? c`
      ${this.isRoot ? c` <div class="swim-drawer__backdrop" aria-hidden="true" @click="${this._backdropClickBound}"></div> ` : u}
      <div
        class="swim-drawer__panel swim-scroll"
        style="width: ${this._widthSize}; height: ${this._heightSize}; z-index: ${this.zIndex};"
      >
        <div
          part="content"
          class="swim-drawer__content swim-scroll ${this.cssClass}"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          id="${this._contentId}"
        >
          <slot></slot>
        </div>
      </div>
    ` : u;
  }
};
Ii.styles = Sn;
let J = Ii;
pe([
  a({ type: String, attribute: "css-class" })
], J.prototype, "cssClass", 2);
pe([
  a({ type: String, reflect: !0 })
], J.prototype, "direction", 2);
pe([
  a({ type: Number })
], J.prototype, "size", 1);
pe([
  a({ type: Number })
], J.prototype, "zIndex", 1);
pe([
  a({
    type: Boolean,
    attribute: "close-on-outside-click",
    reflect: !0
  })
], J.prototype, "closeOnOutsideClick", 1);
pe([
  a({ type: Boolean, attribute: "is-root", reflect: !0 })
], J.prototype, "isRoot", 1);
pe([
  a({ type: Boolean, reflect: !0 })
], J.prototype, "open", 1);
pe([
  b()
], J.prototype, "_closing", 2);
pe([
  b()
], J.prototype, "_contentId", 2);
pe([
  q(".swim-drawer__content")
], J.prototype, "_contentEl", 2);
customElements.get(Ts) || customElements.define(Ts, J);
var Mn = /* @__PURE__ */ ((o) => (o.Fixed = "fixed", o.Absolute = "absolute", o))(Mn || {});
function ul(o) {
  const {
    direction: e = Re.Left,
    size: t = 80,
    zIndex: i = 998,
    closeOnOutsideClick: s = !0,
    isRoot: r = !0,
    parentContainer: n,
    content: l,
    cssClass: d = ""
  } = o, h = document.createElement("swim-drawer");
  if (h.direction = e, h.size = t, h.zIndex = i, h.closeOnOutsideClick = s, h.isRoot = r, h.cssClass = d, l)
    if (typeof l == "string") {
      const g = document.createElement("div");
      for (g.innerHTML = l; g.firstChild; )
        h.appendChild(g.firstChild);
    } else if (l instanceof DocumentFragment)
      for (; l.firstChild; )
        h.appendChild(l.firstChild);
    else
      h.appendChild(l);
  (r ? document.body : n ?? document.body).appendChild(h);
  const m = () => {
    h.hide();
  };
  return h.addEventListener(
    "close",
    () => {
      h.parentNode && h.parentNode.removeChild(h);
    },
    { once: !0 }
  ), h.show(), { close: m, drawer: h };
}
const pl = "swim-lit-icon", Tn = f`
  :host {
    display: block;
    width: 100%;
    margin-bottom: 2em;
    background: var(--grey-825);
    border-radius: var(--radius-8);
    box-sizing: border-box;
  }

  .swim-section__inner {
    display: block;
    width: 100%;
  }

  .swim-section__header {
    background: var(--grey-775);
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;
    min-height: 44px;
    height: auto;
    line-height: 1.25;
    padding: var(--spacing-8) var(--spacing-10);
    color: var(--grey-100);
    position: relative;
    border-radius: var(--radius-8) var(--radius-8) var(--radius-0) var(--radius-0);
    box-sizing: border-box;
    overflow: hidden;
  }

  .swim-section__header-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    gap: var(--spacing-16);
  }

  /* When toggle is shown (left), reserve space so title isn’t cut off */
  .swim-section__header--collapsible:not(.swim-section__header--toggle-right) .swim-section__header-content {
    padding-left: 28px;
  }

  .swim-section__header-content slot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    min-width: 0;
    gap: var(--spacing-16);
  }

  /* Custom header (e.g. swim-section-header): full-width row so title and link sit at start/end */
  .swim-section__header-content ::slotted(swim-section-header) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 0;
    gap: var(--spacing-16);
  }

  /* Slotted headings match section title: same size/weight, no extra margin */
  .swim-section__header-content ::slotted(h1),
  .swim-section__header-content ::slotted(h2),
  .swim-section__header-content ::slotted(h3),
  .swim-section__header-content ::slotted(h4) {
    margin: 0;
    padding: 0;
    font-size: var(--font-size-m);
    font-weight: 400;
    line-height: 1.25;
  }

  .swim-section__header-content ::slotted(a) {
    flex-shrink: 0;
  }

  .swim-section__header.swim-section__header--collapsed {
    border-radius: var(--radius-8);
  }

  .swim-section__toggle {
    position: absolute;
    left: 0;
    top: 0;
    width: 28px;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
    color: var(--grey-100);
    overflow: hidden; /* avoid chevron glyph artifacts */
  }

  .swim-section__toggle:focus-visible {
    outline: 2px solid var(--blue-200);
    outline-offset: -2px;
    border-radius: var(--radius-2);
    z-index: 1;
  }

  .swim-section__toggle-icon {
    font-size: var(--font-size-xs);
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swim-section__toggle swim-icon {
    display: block;
    font-size: var(--font-size-xs);
  }

  .swim-section__header a {
    color: var(--grey-100);
    text-decoration: none;
  }

  .swim-section__header a:hover,
  .swim-section__header a:focus {
    text-decoration: underline;
  }

  .swim-section__header a:visited {
    color: var(--grey-100);
  }

  .swim-section__header-title {
    font-size: var(--font-size-m);
    font-weight: 400;
    line-height: 1.25;
    padding: var(--spacing-0);
    margin: var(--spacing-0);
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  .swim-section__header.swim-section__header--collapsible:not(.swim-section__header--toggle-right) {
    padding-left: 0; /* space for toggle is from header-content padding-left */
  }

  .swim-section__header.swim-section__header--header-toggle {
    cursor: pointer;
  }

  .swim-section__header.swim-section__header--header-toggle:focus-visible {
    outline: 2px solid var(--blue-200);
    border-radius: var(--radius-2);
    outline-offset: 1px;
  }

  .swim-section__header.swim-section__header--toggle-right.swim-section__header--collapsible {
    padding: var(--spacing-0) var(--spacing-20) var(--spacing-0) var(--spacing-16);
  }

  .swim-section__header.swim-section__header--toggle-right .swim-section__toggle {
    left: auto;
    right: 0;
    width: 28px;
  }

  .swim-section__header--empty {
    height: 0;
    min-height: 0;
    padding: 0;
    overflow: hidden;
    border: none;
    border-radius: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }

  .swim-section__content {
    display: block;
    box-sizing: border-box;
  }

  /* Appearance: minimal */
  :host([appearance='minimal']) {
    background: transparent;
  }

  :host([appearance='minimal']) .swim-section__header {
    background: transparent;
  }

  /* Appearance: outline */
  :host([appearance='outline']) .swim-section__header,
  :host([appearance='outline']) .swim-section__content {
    background: none;
    border: 1px solid var(--grey-600);
  }

  :host([appearance='outline']) .swim-section__header {
    border-radius: var(--radius-8) var(--radius-8) var(--radius-0) var(--radius-0);
  }

  :host([appearance='outline']) .swim-section__header.swim-section__header--collapsed {
    border-radius: var(--radius-8);
  }

  :host([appearance='outline']) .swim-section__content {
    border-top: 0;
    border-radius: var(--radius-0) var(--radius-0) var(--radius-8) var(--radius-8);
  }

  /* Appearance: light */
  :host([appearance='light']) .swim-section__header,
  :host([appearance='light']) .swim-section__content {
    border: 2px solid var(--grey-700);
  }

  :host([appearance='light']) .swim-section__header {
    background: var(--grey-700);
    border-radius: var(--radius-8) var(--radius-8) var(--radius-0) var(--radius-0);
  }

  :host([appearance='light']) .swim-section__header.swim-section__header--collapsed {
    border-radius: var(--radius-8);
  }

  :host([appearance='light']) .swim-section__content {
    background: var(--grey-775);
    border-radius: var(--radius-0) var(--radius-0) var(--radius-8) var(--radius-8);
  }
`, On = [y, Tn];
var yo = /* @__PURE__ */ ((o) => (o.Legacy = "legacy", o.Outline = "outline", o.Light = "light", o.Minimal = "minimal", o))(yo || {}), yt = /* @__PURE__ */ ((o) => (o.Left = "left", o.Right = "right", o.None = "none", o))(yt || {}), Pn = Object.defineProperty, $n = Object.getOwnPropertyDescriptor, me = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? $n(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && Pn(e, t, s), s;
};
const Fn = {
  fromAttribute: (o) => o !== "false" && o !== "",
  toAttribute: (o) => o ? "true" : "false"
}, xo = {
  fromAttribute: (o) => o !== null && o !== "false",
  toAttribute: (o) => o ? "true" : "false"
};
let Os = 0;
const Ps = "swim-section", Di = class Di extends _ {
  constructor() {
    super(...arguments), this._id = `section-${++Os}`, this._sectionCollapsed = !1, this._sectionCollapsible = !0, this._headerToggle = !1, this.sectionTitle = "", this.padding = "1.8em", this.appearance = yo.Legacy, this.togglePosition = yt.Left, this._hasHeaderSlot = !1, this._headerSlotChangeBound = () => this._checkHeaderSlot();
  }
  get id() {
    return this._id;
  }
  set id(e) {
    this._id = e || `section-${++Os}`;
  }
  get sectionCollapsed() {
    return this._sectionCollapsed;
  }
  set sectionCollapsed(e) {
    const t = e != null ? p(e) : !1;
    this._sectionCollapsed !== t && (this._sectionCollapsed = t);
  }
  get sectionCollapsible() {
    return this._sectionCollapsible;
  }
  set sectionCollapsible(e) {
    const t = e != null ? p(e) : !0;
    this._sectionCollapsible !== t && (this._sectionCollapsible = t);
  }
  get headerToggle() {
    return this._headerToggle;
  }
  set headerToggle(e) {
    const t = e != null ? p(e) : !1;
    this._headerToggle !== t && (this._headerToggle = t);
  }
  get _contentId() {
    return `${this.id}-content`;
  }
  firstUpdated() {
    var t, i;
    this._checkHeaderSlot();
    const e = ((i = (t = this.renderRoot) == null ? void 0 : t.querySelector) == null ? void 0 : i.call(t, 'slot[name="header"]')) ?? this._headerSlot;
    e && (this._headerSlotForCleanup = e, e.addEventListener("slotchange", this._headerSlotChangeBound));
  }
  disconnectedCallback() {
    this._headerSlotForCleanup && (this._headerSlotForCleanup.removeEventListener("slotchange", this._headerSlotChangeBound), this._headerSlotForCleanup = void 0), super.disconnectedCallback();
  }
  _checkHeaderSlot() {
    var t, i;
    const e = ((i = (t = this.renderRoot) == null ? void 0 : t.querySelector) == null ? void 0 : i.call(t, 'slot[name="header"]')) ?? this._headerSlot;
    if (e) {
      const r = e.assignedNodes({ flatten: !0 }).some(
        (n) => {
          var l;
          return n.nodeType === Node.ELEMENT_NODE || n.nodeType === Node.TEXT_NODE && (((l = n.textContent) == null ? void 0 : l.trim()) ?? "").length > 0;
        }
      );
      this._hasHeaderSlot !== r && (this._hasHeaderSlot = r);
    }
  }
  _headerIsEmpty() {
    var e;
    return !((e = this.sectionTitle) != null && e.trim()) && !this._hasHeaderSlot;
  }
  _onToggle(e) {
    if (e == null || e.stopPropagation(), !this.sectionCollapsible) return;
    const t = !this.sectionCollapsed;
    this.sectionCollapsed = t, this.dispatchEvent(
      new CustomEvent("toggle", {
        detail: t,
        bubbles: !0,
        composed: !0
      })
    );
  }
  _onHeaderKeydown(e) {
    e.key !== " " && e.key !== "Enter" || !this.headerToggle || !this.sectionCollapsible || (e.preventDefault(), this._onToggle(e));
  }
  _onHeaderClick() {
    this.headerToggle && this.sectionCollapsible && this._onToggle();
  }
  render() {
    var n;
    const e = this.sectionCollapsible, t = e && this.togglePosition !== yt.None, i = this.togglePosition === yt.Right, s = [
      "swim-section__header",
      this.sectionCollapsed ? "swim-section__header--collapsed" : "",
      e ? "swim-section__header--collapsible" : "",
      this.headerToggle ? "swim-section__header--header-toggle" : "",
      i ? "swim-section__header--toggle-right" : ""
    ].filter(Boolean).join(" "), r = this._headerIsEmpty();
    return c`
      <div class="swim-section__inner">
        <header
          class="${s}${r ? " swim-section__header--empty" : ""}"
          role="${this.headerToggle && e && !r ? "button" : "presentation"}"
          tabindex="${this.headerToggle && e && !r ? 0 : -1}"
          aria-expanded="${r ? void 0 : this.sectionCollapsed ? "false" : "true"}"
          aria-controls="${this._contentId}"
          @click="${this._onHeaderClick}"
          @keydown="${this._onHeaderKeydown}"
        >
          ${t && !r ? c`
                <button
                  type="button"
                  class="swim-section__toggle"
                  title="Toggle Content Visibility"
                  aria-controls="${this._contentId}"
                  aria-expanded="${this.sectionCollapsed ? "false" : "true"}"
                  @click="${this._onToggle}"
                  @keydown="${(l) => {
      (l.key === " " || l.key === "Enter") && (l.preventDefault(), this._onToggle(l));
    }}"
                >
                  <swim-icon
                    class="swim-section__toggle-icon"
                    font-icon="${this.sectionCollapsed ? "chevron-bold-right" : "chevron-bold-down"}"
                    aria-hidden="true"
                  ></swim-icon>
                </button>
              ` : u}
          <div class="swim-section__header-content">
            ${(n = this.sectionTitle) != null && n.trim() ? c`<h1 class="swim-section__header-title">${this.sectionTitle}</h1>` : u}
            <slot name="header"></slot>
          </div>
        </header>
        ${this.sectionCollapsed ? u : c`
              <div
                id="${this._contentId}"
                class="swim-section__content"
                style="padding: ${this.padding}"
                role="region"
                aria-labelledby="${r ? "" : void 0}"
              >
                <slot></slot>
              </div>
            `}
      </div>
    `;
  }
};
Di.styles = On;
let K = Di;
me([
  a({ type: String, reflect: !0 })
], K.prototype, "id", 1);
me([
  a({
    reflect: !0,
    attribute: "section-collapsed",
    converter: xo
  })
], K.prototype, "sectionCollapsed", 1);
me([
  a({
    reflect: !0,
    attribute: "section-collapsible",
    converter: Fn
  })
], K.prototype, "sectionCollapsible", 1);
me([
  a({
    reflect: !0,
    attribute: "header-toggle",
    converter: xo
  })
], K.prototype, "headerToggle", 1);
me([
  a({ type: String, reflect: !0, attribute: "section-title" })
], K.prototype, "sectionTitle", 2);
me([
  a({ type: String })
], K.prototype, "padding", 2);
me([
  a({ type: String, reflect: !0 })
], K.prototype, "appearance", 2);
me([
  a({ type: String, reflect: !0, attribute: "toggle-position" })
], K.prototype, "togglePosition", 2);
me([
  b()
], K.prototype, "_hasHeaderSlot", 2);
me([
  q('slot[name="header"]')
], K.prototype, "_headerSlot", 2);
customElements.get(Ps) || customElements.define(Ps, K);
const Bn = f`
  :host {
    display: contents;
  }
`, $s = "swim-section-header", Mi = class Mi extends _ {
  render() {
    return c`<slot></slot>`;
  }
};
Mi.styles = Bn;
let ei = Mi;
customElements.get($s) || customElements.define($s, ei);
const Ln = f`
  :host {
    display: block;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  .swim-radio__label {
    display: flex;
    align-items: center;
    position: relative;
    min-height: 1.5em;
    padding-left: 1.5em;
    margin: 0 0.8rem 0 0;
    cursor: pointer;
    user-select: none;
    outline: none;
  }

  :host([disabled]) .swim-radio__label {
    cursor: not-allowed;
  }

  .swim-radio__label:focus-visible {
    outline: none;
  }

  .swim-radio__label:focus-visible .swim-radio__checkmark {
    outline: 2px solid var(--blue-200);
    outline-offset: 1px;
  }

  .swim-radio__content {
    color: var(--grey-100);
    font-size: var(--font-size-m);
    line-height: var(--font-line-height-200);
  }

  /* Hide native radio visually but keep for semantics/accessibility */
  .swim-radio__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
    pointer-events: none;
  }

  .swim-radio__checkmark {
    position: absolute;
    top: 0.25em;
    left: 0;
    height: 1em;
    width: 1em;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid var(--grey-600);
    opacity: 1;
    transition: background-color 0.3s ease, border-color 0.3s ease, opacity 0.3s ease;
    outline: 0 none transparent;
    outline-offset: 1px;
  }

  .swim-radio__checkmark::after {
    content: '';
    position: absolute;
    display: block;
    opacity: 0;
    top: 0;
    left: 0;
    width: 0.25em;
    height: 0.25em;
    /* Center dot in 1em circle: (1em - 0.25em) / 2 = 0.375em */
    transform: translate(0.375em, 0.375em);
    border-radius: 50%;
    background: var(--white);
    box-shadow: var(--shadow-1);
    transition: opacity 0.3s ease;
  }

  /* Hover */
  .swim-radio__label:hover .swim-radio__checkmark {
    background-color: var(--blue-400);
    border-color: var(--blue-400);
    opacity: 0.3;
  }

  .swim-radio__label:hover .swim-radio__checkmark::after {
    opacity: 0;
  }

  /* Checked */
  .swim-radio__label .swim-radio__input:checked ~ .swim-radio__checkmark,
  .swim-radio__checkmark--checked {
    background-color: var(--blue-400);
    border-color: var(--blue-400);
    opacity: 1;
  }

  .swim-radio__label .swim-radio__input:checked ~ .swim-radio__checkmark::after,
  .swim-radio__label:hover .swim-radio__checkmark::after,
  .swim-radio__checkmark--checked::after {
    opacity: 1;
  }

  /* Disabled: no hover effect */
  :host([disabled]) .swim-radio__label:hover .swim-radio__checkmark {
    background-color: transparent;
    border-color: var(--grey-600);
    opacity: 1;
  }

  :host([disabled]) .swim-radio__label:hover .swim-radio__checkmark::after {
    opacity: 0;
  }

  :host([disabled]) .swim-radio__label .swim-radio__input:checked ~ .swim-radio__checkmark::after,
  :host([disabled]) .swim-radio__checkmark--checked::after {
    opacity: 1;
  }
`, qn = f`
  :host {
    display: block;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  .swim-radio-group__slot {
    display: block;
    outline: none;
  }

  .swim-radio-group__slot:focus {
    outline: none;
  }
`;
var Hn = Object.defineProperty, Vn = Object.getOwnPropertyDescriptor, be = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Vn(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && Hn(e, t, s), s;
};
let Rn = 0;
const Fs = "swim-radio", Ti = class Ti extends _ {
  constructor() {
    super(...arguments), this.id = `swim-radio-${++Rn}`, this.name = "", this.radioId = "", this._tabindex = 0, this._checked = !1, this.value = "", this._disabled = !1, this.groupDisabled = !1, this.isInGroup = !1;
  }
  get tabindex() {
    return this._tabindex;
  }
  set tabindex(e) {
    this._tabindex = S(e, 0);
  }
  get checked() {
    return this._checked;
  }
  set checked(e) {
    const t = p(e);
    this._checked !== t && (this._checked = t);
  }
  get disabled() {
    return this._disabled || this.groupDisabled;
  }
  set disabled(e) {
    this._disabled = p(e);
  }
  get _effectiveTabindex() {
    return this.disabled || this.isInGroup ? -1 : this._tabindex;
  }
  get _inputId() {
    return this.radioId || `${this.id}-radio`;
  }
  focus(e) {
    var t;
    (t = this._roving) == null || t.focus(e);
  }
  _onClick(e) {
    e.preventDefault(), !this.disabled && this._select();
  }
  _onKeydown(e) {
    e.key !== " " || this.disabled || (e.stopPropagation(), e.preventDefault(), this._select());
  }
  /** Select this radio. In a group only "select" (set checked); standalone can toggle. */
  _select() {
    if (this.isInGroup) {
      if (this._checked) return;
      this.checked = !0;
    } else
      this.checked = !this._checked;
    this._checked && this.dispatchEvent(
      new CustomEvent("change", {
        detail: this.value,
        bubbles: !0,
        composed: !0
      })
    );
  }
  _onInputChange(e) {
    this.checked = !0, this.dispatchEvent(
      new CustomEvent("change", {
        detail: this.value,
        bubbles: !0,
        composed: !0
      })
    );
  }
  _onFocus(e) {
    this.dispatchEvent(new FocusEvent("focus", { ...e, bubbles: !0, composed: !0 }));
  }
  _onBlur(e) {
    this.dispatchEvent(new FocusEvent("blur", { ...e, bubbles: !0, composed: !0 }));
  }
  render() {
    const e = `${this.id}-content`;
    return c`
      <label
        class="swim-radio__label swim-radio__roving"
        for="${this._inputId}"
        tabindex="${this._effectiveTabindex}"
        role="radio"
        aria-checked="${this._checked}"
        aria-disabled="${this.disabled ? "true" : "false"}"
        aria-labelledby="${e}"
        @click="${this._onClick}"
        @keydown="${this._onKeydown}"
        @focus="${this._onFocus}"
        @blur="${this._onBlur}"
      >
        <input
          type="radio"
          class="swim-radio__input"
          id="${this._inputId}"
          tabindex="-1"
          .checked="${this._checked}"
          ?disabled="${this.disabled}"
          name="${this.name || this.id}"
          aria-checked="${this._checked}"
          @change="${this._onInputChange}"
          @focus="${this._onFocus}"
          @blur="${this._onBlur}"
        />
        <span
          part="checkmark"
          class="swim-radio__checkmark ${this._checked ? "swim-radio__checkmark--checked" : ""}"
        ></span>
        <div part="content" class="swim-radio__content" id="${e}">
          <slot></slot>
        </div>
      </label>
    `;
  }
};
Ti.styles = [y, Ln];
let j = Ti;
be([
  q(".swim-radio__roving")
], j.prototype, "_roving", 2);
be([
  a({ type: String })
], j.prototype, "id", 2);
be([
  a({ type: String })
], j.prototype, "name", 2);
be([
  a({ type: String, attribute: "radio-id" })
], j.prototype, "radioId", 2);
be([
  a({ type: Number })
], j.prototype, "tabindex", 1);
be([
  a({ type: Boolean, reflect: !0 })
], j.prototype, "checked", 1);
be([
  a({ type: String })
], j.prototype, "value", 2);
be([
  a({ type: Boolean, reflect: !0 })
], j.prototype, "disabled", 1);
be([
  a({ type: Boolean, attribute: !1 })
], j.prototype, "groupDisabled", 2);
be([
  a({ type: Boolean, attribute: !1 })
], j.prototype, "isInGroup", 2);
customElements.get(Fs) || customElements.define(Fs, j);
var Yn = Object.defineProperty, Un = Object.getOwnPropertyDescriptor, Ie = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Un(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && Yn(e, t, s), s;
};
let Nn = 0;
function Gn(o, e) {
  return (o % e + e) % e;
}
const Bs = "swim-radio-group", Pt = class Pt extends _ {
  constructor() {
    super(), this.id = `swim-radio-group-${++Nn}`, this._disabled = !1, this._value = "", this.name = "", this._focusIndex = -1, this._tabindex = 0, this._radios = [], this._changeHandler = (e) => this._onRadioChange(e), this._slotChangeBound = () => this._syncRadios(), this._onGroupFocus = (e) => {
      if (e.target !== this._slotWrapper) return;
      const t = this._radios.find((i) => i.checked);
      t ? (this._focusIndex = this._radios.indexOf(t), this._focusOn(this._focusIndex)) : this._focusFirst();
    }, this._onGroupBlur = () => {
      this.dispatchEvent(new FocusEvent("blur", { bubbles: !0, composed: !0 }));
    }, this._internals = this.attachInternals();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    this._disabled = p(e), this._updateRadioDisabledState();
  }
  get value() {
    return this._value;
  }
  set value(e) {
    var t;
    this._value !== e && (this._value = e, this._updateSelectedFromValue(), (t = this._internals) == null || t.setFormValue(String(this._value)));
  }
  get focusIndex() {
    return this._focusIndex;
  }
  set focusIndex(e) {
    this._focusIndex = S(e, -1), this._focusOn(this._focusIndex);
  }
  get tabindex() {
    return this.disabled ? -1 : this._tabindex;
  }
  set tabindex(e) {
    this._tabindex = S(e, 0);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("change", this._changeHandler), this.addEventListener("focus", this._onGroupFocus), this.addEventListener("blur", this._onGroupBlur);
  }
  disconnectedCallback() {
    var e;
    (e = this._slot) == null || e.removeEventListener("slotchange", this._slotChangeBound), this.removeEventListener("change", this._changeHandler), this.removeEventListener("focus", this._onGroupFocus), this.removeEventListener("blur", this._onGroupBlur), super.disconnectedCallback();
  }
  firstUpdated() {
    var e;
    (e = this._slot) == null || e.addEventListener("slotchange", this._slotChangeBound), this._syncRadios();
  }
  updated(e) {
    super.updated(e), (e.has("value") || e.has("name") || e.has("disabled")) && (this._updateSelectedFromValue(), this._updateRadioDisabledState(), this._updateRadioNames());
  }
  _syncRadios() {
    var i;
    const e = this._slot, t = ((i = e == null ? void 0 : e.assignedElements) == null ? void 0 : i.call(e)) ?? [];
    this._radios = t.filter(
      (s) => {
        var r;
        return s instanceof HTMLElement && ((r = s.tagName) == null ? void 0 : r.toLowerCase()) === "swim-radio";
      }
    ), this._updateRadioNames(), this._updateRadioDisabledState(), this._updateSelectedFromValue();
  }
  _updateRadioNames() {
    const e = this.name || this.id;
    this._radios.forEach((t) => {
      t.name = e, t.isInGroup = !0;
    });
  }
  _updateRadioDisabledState() {
    this._radios.forEach((e) => {
      e.groupDisabled = this._disabled;
    });
  }
  _updateSelectedFromValue() {
    this._radios.forEach((e) => {
      e.checked = this._value === e.value;
    });
  }
  _onRadioChange(e) {
    var s;
    const t = e.target;
    if (!t || ((s = t.tagName) == null ? void 0 : s.toLowerCase()) !== "swim-radio") return;
    const i = e.detail;
    this._value !== i && (this._value = i, this._updateSelectedFromValue(), this._internals.setFormValue(String(this._value)), this.dispatchEvent(
      new CustomEvent("change", {
        detail: this._value,
        bubbles: !0,
        composed: !0
      })
    ));
  }
  _focusFirst() {
    if (!(this.disabled || !this._radios.length)) {
      for (let e = 0; e < this._radios.length; e++)
        if (!this._radios[e].disabled) {
          this._focusIndex = e, this._focusOn(e);
          return;
        }
    }
  }
  _focusOn(e) {
    this.disabled || e < 0 || e >= this._radios.length || this._radios[e].focus();
  }
  _selectIndex(e) {
    if (this.disabled || e < 0 || e >= this._radios.length) return;
    const t = this._radios[e];
    t.disabled || (this.value = t.value);
  }
  _focusIn(e) {
    if (this.disabled || !this._radios.length) return;
    const t = this._radios.length;
    for (let i = 1; i <= t; i++) {
      const s = Gn(this._focusIndex + e * i, t);
      if (!this._radios[s].disabled) {
        this._focusIndex = s, this._focusOn(s);
        return;
      }
    }
  }
  _onKeydown(e) {
    switch (e.key) {
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault(), e.stopPropagation(), this._focusIn(-1), this._selectIndex(this._focusIndex);
        break;
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault(), e.stopPropagation(), this._focusIn(1), this._selectIndex(this._focusIndex);
        break;
    }
  }
  render() {
    return c`
      <div
        class="swim-radio-group__slot"
        role="radiogroup"
        tabindex="${this.tabindex}"
        aria-disabled="${this.disabled ? "true" : "false"}"
        @keydown="${this._onKeydown}"
      >
        <slot></slot>
      </div>
    `;
  }
};
Pt.styles = [y, qn], Pt.formAssociated = !0;
let oe = Pt;
Ie([
  q("slot")
], oe.prototype, "_slot", 2);
Ie([
  q(".swim-radio-group__slot")
], oe.prototype, "_slotWrapper", 2);
Ie([
  a({ type: String })
], oe.prototype, "id", 2);
Ie([
  a({ type: Boolean, reflect: !0 })
], oe.prototype, "disabled", 1);
Ie([
  a({ type: String })
], oe.prototype, "value", 1);
Ie([
  a({ type: String })
], oe.prototype, "name", 2);
Ie([
  a({ type: Number })
], oe.prototype, "focusIndex", 1);
Ie([
  a({ type: Number })
], oe.prototype, "tabindex", 1);
customElements.get(Bs) || customElements.define(Bs, oe);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ls = (o, e, t) => {
  const i = /* @__PURE__ */ new Map();
  for (let s = e; s <= t; s++) i.set(o[s], s);
  return i;
}, Jn = ci(class extends di {
  constructor(o) {
    if (super(o), o.type !== Ae.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(o, e, t) {
    let i;
    t === void 0 ? t = e : e !== void 0 && (i = e);
    const s = [], r = [];
    let n = 0;
    for (const l of o) s[n] = i ? i(l, n) : n, r[n] = t(l, n), n++;
    return { values: r, keys: s };
  }
  render(o, e, t) {
    return this.dt(o, e, t).values;
  }
  update(o, [e, t, i]) {
    const s = un(o), { values: r, keys: n } = this.dt(e, t, i);
    if (!Array.isArray(s)) return this.ut = n, r;
    const l = this.ut ?? (this.ut = []), d = [];
    let h, w, m = 0, g = s.length - 1, k = 0, T = r.length - 1;
    for (; m <= g && k <= T; ) if (s[m] === null) m++;
    else if (s[g] === null) g--;
    else if (l[m] === n[k]) d[k] = Me(s[m], r[k]), m++, k++;
    else if (l[g] === n[T]) d[T] = Me(s[g], r[T]), g--, T--;
    else if (l[m] === n[T]) d[T] = Me(s[m], r[T]), ot(o, d[T + 1], s[m]), m++, T--;
    else if (l[g] === n[k]) d[k] = Me(s[g], r[k]), ot(o, s[m], s[g]), g--, k++;
    else if (h === void 0 && (h = Ls(n, k, T), w = Ls(l, m, g)), h.has(l[m])) if (h.has(l[g])) {
      const te = w.get(n[k]), et = te !== void 0 ? s[te] : null;
      if (et === null) {
        const tt = ot(o, s[m]);
        Me(tt, r[k]), d[k] = tt;
      } else d[k] = Me(et, r[k]), ot(o, s[m], et), s[te] = null;
      k++;
    } else Wt(s[g]), g--;
    else Wt(s[m]), m++;
    for (; k <= T; ) {
      const te = ot(o, d[T + 1]);
      Me(te, r[k]), d[k++] = te;
    }
    for (; m <= g; ) {
      const te = s[m++];
      te !== null && Wt(te);
    }
    return this.ut = n, vo(o, d), Q;
  }
}), Kn = f`
  :host {
    display: block;
    max-width: 100%;
    margin-top: var(--spacing-16);
    margin-bottom: var(--spacing-8);
    line-height: calc(1em + 0.75em);
    padding-top: calc(0.75rem + 8px);
    padding-bottom: 0;
    position: relative;
    min-width: 0;
  }

  :host([marginless]) {
    margin-top: 0;
    margin-bottom: 0;
  }

  :host([no-label]) {
    padding-top: 0;
  }

  :host([size='md']) .select-input {
    font-size: var(--font-size-l) !important;
  }

  :host([size='lg']) .select-input {
    font-size: var(--font-size-xl) !important;
  }

  :host([focused]:not([invalid])) .select-label {
    color: var(--blue-500) !important;
  }

  :host([invalid][touched]) .select-underline {
    background-color: var(--red-500) !important;
  }

  :host([invalid][touched]) .underline-fill {
    background-color: var(--red-500) !important;
  }

  :host([invalid][touched]) .select-label,
  :host([invalid][touched]) .select-hint {
    color: var(--red-500);
  }

  .select-wrap {
    position: relative;
    display: block;
    margin-bottom: 0;
    width: 100%;
  }

  .select-flex-wrap {
    display: flex;
    flex-direction: row;
  }

  .select-flex-wrap-inner {
    display: flex;
    flex: 100%;
    width: 100%;
    position: relative;
  }

  .select-input-wrap {
    width: 100%;
    position: relative;
  }

  .select-input {
    align-items: center;
    position: relative;
    background: transparent;
    outline: none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
    min-height: var(--input-height, 33px);
    min-width: 60px;
    cursor: pointer;
    display: flex;
    border: none;
    color: var(--grey-050);
    font-size: var(--font-size-m);
    font-family: inherit;
  }

  .select-input:focus {
    outline: none;
  }

  .select-input[disabled] {
    cursor: not-allowed;
    color: var(--grey-400);
  }

  .select-value {
    flex: 1;
    padding: 3px 0;
    min-height: 1.4em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .select-placeholder {
    color: var(--grey-350);
  }

  .select-controls {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
    padding-right: var(--spacing-4);
    color: var(--grey-350);
  }

  .select-clear,
  .select-caret {
    background: none;
    border: none;
    padding: var(--spacing-2);
    cursor: pointer;
    color: inherit;
    font-size: var(--font-size-xxs);
    display: flex;
    align-items: center;
    transition: color 100ms;
  }

  .select-clear:hover,
  .select-caret:hover {
    color: var(--blue-400);
  }

  .select-caret {
    transition: transform 200ms ease-in-out;
    transform: rotate(0deg);
  }

  :host([open]) .select-caret {
    transform: rotate(180deg);
  }

  .select-label {
    position: absolute;
    top: 0.5em;
    line-height: var(--font-line-height-100);
    pointer-events: none;
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-semibold);
    color: var(--grey-350);
    white-space: nowrap;
    overflow-x: clip;
    max-width: 100%;
    text-overflow: ellipsis;
    transition: color 0.2s ease-out, font-size 150ms ease-out, top 150ms ease-out;
  }

  :host([active]) .select-label,
  :host([has-placeholder]) .select-label {
    font-size: var(--font-size-xs);
    top: -1.4em;
  }

  .select-underline {
    width: 100%;
    height: 1px;
    background-color: var(--grey-600);
  }

  .underline-fill {
    background-color: var(--blue-500);
    transition: width 250ms ease-out;
    width: 0;
    height: 2px;
    margin: 0 auto;
  }

  :host([focused]) .underline-fill,
  :host([open]) .underline-fill {
    width: 100%;
  }

  .select-hint {
    font-size: var(--font-size-xs);
    color: var(--grey-350);
    margin-top: var(--spacing-8);
    min-height: 1em;
    line-height: 14px;
    transition: color 0.2s ease-in-out;
  }

  .select-hint.hidden {
    display: none;
  }

  /* Dropdown */
  .select-dropdown {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1000;
    background: var(--grey-700);
    border: 1px solid transparent;
    border-radius: var(--radius-4);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: var(--spacing-8);
    max-height: 300px;
    display: none;
  }

  :host([open]) .select-dropdown {
    display: block;
    animation: slideDown 0.25s ease-out;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .select-filter {
    padding: var(--spacing-10);
    background: var(--grey-600);
    position: sticky;
    top: 0;
    z-index: 1;
    border-top-left-radius: var(--radius-4);
    border-top-right-radius: var(--radius-4);
  }

  .select-filter-input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: var(--grey-050);
    font-size: var(--font-size-m);
    font-family: inherit;
    padding: var(--spacing-4);
  }

  .select-filter-input::placeholder {
    color: var(--grey-350);
  }

  .select-options {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .select-option {
    padding: 7px 15px;
    font-size: var(--font-size-m);
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--grey-050);
    transition: background-color 100ms;
  }

  .select-option:not(:last-child) {
    border-bottom: 1px solid var(--grey-650);
  }

  .select-option:hover:not([disabled]) {
    background: var(--grey-750);
  }

  .select-option[selected] {
    background: var(--blue-600);
    color: var(--white);
  }

  .select-option[disabled] {
    color: var(--grey-450);
    cursor: not-allowed;
    opacity: 0.6;
  }

  .select-option[focused]:not([disabled]) {
    background: var(--grey-725);
  }

  .select-empty {
    padding: 7px 15px;
    font-size: var(--font-size-m);
    color: var(--grey-300);
    font-style: italic;
  }

  /* Multiple selection */
  :host([multiple]) .select-value {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-4);
  }

  .select-chip {
    background: var(--grey-600);
    color: var(--white);
    border-radius: var(--radius-2);
    padding: 0 0.5em;
    font-size: var(--font-size-m);
    line-height: 1.4em;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-4);
    white-space: nowrap;
    max-width: 200px;
  }

  .select-chip-label {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .select-chip-remove {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: var(--grey-350);
    font-size: 0.5em;
    line-height: 1;
    transition: color 100ms;
  }

  .select-chip-remove:hover {
    color: var(--white);
  }

  /* Fill appearance */
  :host([appearance='fill']) .select-flex-wrap {
    position: relative;
  }

  :host([appearance='fill']) .select-flex-wrap::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--grey-875);
    mix-blend-mode: exclusion;
    pointer-events: none;
    border-top-left-radius: var(--radius-4);
    border-top-right-radius: var(--radius-4);
  }

  :host([appearance='fill']) .select-input {
    padding: var(--spacing-4) 10px;
    position: relative;
    z-index: 1;
  }

  :host([appearance='fill']) .select-label {
    left: 0;
  }

  /* swim-icon in clear and caret buttons */
  .select-clear swim-icon,
  .select-caret swim-icon {
    display: block;
    font-size: inherit;
  }
`;
var jn = Object.defineProperty, Wn = Object.getOwnPropertyDescriptor, I = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Wn(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && jn(e, t, s), s;
};
const qs = "swim-select", $t = class $t extends _ {
  constructor() {
    super(), this.label = "", this.placeholder = "Select...", this.hint = "", this.emptyPlaceholder = "No options available", this.filterPlaceholder = "Filter options...", this.options = [], this._value = [], this.name = "", this.id = `swim-select-${Math.random().toString(36).substr(2, 9)}`, this._disabled = !1, this._required = !1, this.appearance = hi.legacy, this.size = ui.sm, this._withMargin = !0, this._withHint = !0, this._filterable = !0, this._multiple = !1, this._allowClear = !0, this.requiredIndicator = "*", this._open = !1, this._focused = !1, this._touched = !1, this._invalid = !1, this._filterQuery = "", this._focusedIndex = -1, this._internals = this.attachInternals();
  }
  get value() {
    return this.multiple ? this._value : this._value[0] ?? null;
  }
  set value(e) {
    const t = this._value;
    this.multiple ? this._value = Array.isArray(e) ? e : e ? [e] : [] : this._value = e ? [e] : [], this._internals.setFormValue(this.multiple ? JSON.stringify(this._value) : this._value[0] ?? ""), this.requestUpdate("value", t), this._updateActiveState();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    this._disabled = p(e);
  }
  get required() {
    return this._required;
  }
  set required(e) {
    this._required = p(e);
  }
  get marginless() {
    return !this._withMargin;
  }
  set marginless(e) {
    this._withMargin = !p(e);
  }
  get withHint() {
    return this._withHint;
  }
  set withHint(e) {
    this._withHint = p(e);
  }
  get filterable() {
    return this._filterable;
  }
  set filterable(e) {
    this._filterable = p(e);
  }
  get multiple() {
    return this._multiple;
  }
  set multiple(e) {
    this._multiple = p(e);
  }
  get allowClear() {
    return this._allowClear;
  }
  set allowClear(e) {
    this._allowClear = p(e);
  }
  connectedCallback() {
    super.connectedCallback(), this._updateActiveState();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._removeClickOutsideListener();
  }
  updated(e) {
    super.updated(e), e.has("value") && (this._updateActiveState(), this._validate()), e.has("_open") && (this._open ? (this.setAttribute("open", ""), this._addClickOutsideListener(), setTimeout(() => {
      this.filterable && this.filterInput && this.filterInput.focus();
    }, 100)) : (this.removeAttribute("open"), this._removeClickOutsideListener(), this._filterQuery = "", this._focusedIndex = -1));
  }
  render() {
    const e = this._value.length > 0, t = this._getFilteredOptions(), i = this.allowClear && e && !this.disabled;
    return c`
      <div class="select-wrap">
        <div class="select-flex-wrap">
          <div class="select-flex-wrap-inner">
            <div class="select-input-wrap">
              <div
                class="select-input"
                part="select"
                role="combobox"
                aria-expanded="${this._open}"
                aria-haspopup="listbox"
                aria-controls="${this.id}-listbox"
                tabindex="${this.disabled ? -1 : 0}"
                @click="${this._handleInputClick}"
                @keydown="${this._handleKeyDown}"
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
              >
                <div class="select-value">${this._renderValue()}</div>
                <div class="select-controls">
                  ${i ? c`
                        <button
                          type="button"
                          class="select-clear"
                          aria-label="Clear selection"
                          @click="${this._handleClear}"
                        >
                          <swim-icon font-icon="x"></swim-icon>
                        </button>
                      ` : u}
                  <button
                    type="button"
                    class="select-caret"
                    aria-label="Toggle dropdown"
                    @click="${this._handleToggle}"
                  >
                    <swim-icon font-icon="chevron-bold-down"></swim-icon>
                  </button>
                </div>
              </div>
              <label class="select-label" for="${this.id}">
                ${this.label} ${this.required ? c`<span>${this.requiredIndicator}</span>` : u}
              </label>
            </div>
          </div>
        </div>
        <div class="select-underline">
          <div class="underline-fill"></div>
        </div>
        <div class="select-hint ${this.withHint ? "" : "hidden"}">
          <slot name="hint">${this.hint}</slot>
        </div>

        ${this._open ? c`
              <div class="select-dropdown swim-scroll" part="dropdown" role="listbox" id="${this.id}-listbox">
                ${this.filterable ? c`
                      <div class="select-filter">
                        <input
                          type="text"
                          class="select-filter-input"
                          placeholder="${this.filterPlaceholder}"
                          .value="${this._filterQuery}"
                          @input="${this._handleFilterInput}"
                          @keydown="${this._handleFilterKeyDown}"
                        />
                      </div>
                    ` : u}
                ${t.length > 0 ? c`
                      <ul class="select-options">
                        ${Jn(
      t,
      (s) => this._getOptionValue(s),
      (s, r) => this._renderOption(s, r)
    )}
                      </ul>
                    ` : c` <div class="select-empty">${this.emptyPlaceholder}</div> `}
              </div>
            ` : u}
      </div>
    `;
  }
  _renderValue() {
    if (this._value.length === 0)
      return c`<span class="select-placeholder">${this.placeholder}</span>`;
    if (this.multiple)
      return c`
        ${this._value.map((e) => {
        const t = this.options.find((i) => this._getOptionValue(i) === e);
        return this._renderChip(t || { name: e, value: e });
      })}
      `;
    {
      const e = this.options.find((t) => this._getOptionValue(t) === this._value[0]);
      return c`${(e == null ? void 0 : e.name) || this._value[0]}`;
    }
  }
  _renderChip(e) {
    return c`
      <div class="select-chip">
        <span class="select-chip-label">${e.name}</span>
        ${this.disabled ? u : c`
              <button
                type="button"
                class="select-chip-remove"
                aria-label="Remove ${e.name}"
                @click="${(t) => this._removeChip(t, e)}"
              >
                <swim-icon font-icon="x"></swim-icon>
              </button>
            `}
      </div>
    `;
  }
  _renderOption(e, t) {
    const i = this._getOptionValue(e), s = this._isSelected(i), r = t === this._focusedIndex;
    return c`
      <li
        class="select-option"
        role="option"
        ?selected="${s}"
        ?focused="${r}"
        ?disabled="${e.disabled}"
        aria-selected="${s}"
        @click="${() => this._handleOptionClick(e)}"
        @mouseenter="${() => this._focusedIndex = t}"
      >
        ${e.name}
      </li>
    `;
  }
  _handleInputClick(e) {
    this.disabled || this._toggleDropdown();
  }
  _handleToggle(e) {
    e.stopPropagation(), this.disabled || this._toggleDropdown();
  }
  _handleClear(e) {
    e.stopPropagation(), this.value = this.multiple ? [] : null, this._dispatchChange(), this._validate();
  }
  _handleFocus() {
    this._focused = !0, this.setAttribute("focused", "");
  }
  _handleBlur() {
    this._focused = !1, this.removeAttribute("focused"), this._touched || (this._touched = !0, this.setAttribute("touched", "")), this._validate();
  }
  _handleKeyDown(e) {
    switch (e.key) {
      case "Enter":
      case " ":
        this._open || (e.preventDefault(), this._toggleDropdown());
        break;
      case "Escape":
        this._open && (e.preventDefault(), this._closeDropdown());
        break;
      case "ArrowDown":
        e.preventDefault(), this._open ? this._moveFocus(1) : this._openDropdown();
        break;
      case "ArrowUp":
        e.preventDefault(), this._open && this._moveFocus(-1);
        break;
    }
  }
  _handleFilterInput(e) {
    const t = e.target;
    this._filterQuery = t.value, this._focusedIndex = 0;
  }
  _handleFilterKeyDown(e) {
    var t;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault(), this._moveFocus(1);
        break;
      case "ArrowUp":
        e.preventDefault(), this._moveFocus(-1);
        break;
      case "Enter":
        e.preventDefault();
        const i = this._getFilteredOptions();
        i[this._focusedIndex] && this._handleOptionClick(i[this._focusedIndex]);
        break;
      case "Escape":
        e.preventDefault(), this._closeDropdown(), (t = this.selectInput) == null || t.focus();
        break;
    }
  }
  _handleOptionClick(e) {
    if (e.disabled) return;
    const t = this._getOptionValue(e);
    if (this.multiple) {
      const i = [...this._value], s = i.indexOf(t);
      s > -1 ? i.splice(s, 1) : i.push(t), this.value = i;
    } else
      this.value = t, this._closeDropdown();
    this._dispatchChange(), this._validate();
  }
  _removeChip(e, t) {
    e.stopPropagation();
    const i = this._getOptionValue(t), s = this._value.filter((r) => r !== i);
    this.value = s, this._dispatchChange(), this._validate();
  }
  _toggleDropdown() {
    this._open ? this._closeDropdown() : this._openDropdown();
  }
  _openDropdown() {
    this.disabled || (this._open = !0, this._focusedIndex = 0, this.dispatchEvent(new Event("open", { bubbles: !0, composed: !0 })));
  }
  _closeDropdown() {
    this._open = !1, this.dispatchEvent(new Event("close", { bubbles: !0, composed: !0 }));
  }
  _moveFocus(e) {
    const i = this._getFilteredOptions().length - 1;
    let s = this._focusedIndex + e;
    s < 0 ? s = i : s > i && (s = 0), this._focusedIndex = s;
  }
  _getFilteredOptions() {
    if (!this._filterQuery)
      return this.options;
    const e = this._filterQuery.toLowerCase();
    return this.options.filter((t) => t.name.toLowerCase().includes(e));
  }
  _getOptionValue(e) {
    return e.value !== void 0 ? e.value : e.name;
  }
  _isSelected(e) {
    return this._value.includes(e);
  }
  _dispatchChange() {
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _validate() {
    let e = !0;
    return this.required && this._value.length === 0 && (e = !1), this._invalid = !e, this._invalid ? (this.setAttribute("invalid", ""), this._internals.setValidity({ valueMissing: !0 }, "Please select an option")) : (this.removeAttribute("invalid"), this._internals.setValidity({})), e;
  }
  _updateActiveState() {
    const e = this._value.length > 0, t = !!this.placeholder;
    this._focused || e || this._open ? this.setAttribute("active", "") : this.removeAttribute("active"), t ? this.setAttribute("has-placeholder", "") : this.removeAttribute("has-placeholder"), this.label ? this.removeAttribute("no-label") : this.setAttribute("no-label", "");
  }
  _addClickOutsideListener() {
    this._clickOutsideListener = (e) => {
      this.contains(e.target) || this._closeDropdown();
    }, setTimeout(() => {
      document.addEventListener("click", this._clickOutsideListener);
    }, 0);
  }
  _removeClickOutsideListener() {
    this._clickOutsideListener && (document.removeEventListener("click", this._clickOutsideListener), this._clickOutsideListener = void 0);
  }
  // Form API
  formResetCallback() {
    this.value = this.multiple ? [] : null, this._touched = !1, this.removeAttribute("touched");
  }
  formDisabledCallback(e) {
    this.disabled = e;
  }
};
$t.styles = [y, _t, Kn], $t.formAssociated = !0;
let E = $t;
I([
  q(".select-input")
], E.prototype, "selectInput", 2);
I([
  q(".select-filter-input")
], E.prototype, "filterInput", 2);
I([
  a({ type: String })
], E.prototype, "label", 2);
I([
  a({ type: String })
], E.prototype, "placeholder", 2);
I([
  a({ type: String })
], E.prototype, "hint", 2);
I([
  a({ type: String, attribute: "empty-placeholder" })
], E.prototype, "emptyPlaceholder", 2);
I([
  a({ type: String, attribute: "filter-placeholder" })
], E.prototype, "filterPlaceholder", 2);
I([
  a({ type: Array })
], E.prototype, "options", 2);
I([
  a()
], E.prototype, "value", 1);
I([
  a({ type: String })
], E.prototype, "name", 2);
I([
  a({ type: String })
], E.prototype, "id", 2);
I([
  a({ type: Boolean, reflect: !0 })
], E.prototype, "disabled", 1);
I([
  a({ type: Boolean, reflect: !0 })
], E.prototype, "required", 1);
I([
  a({ type: String, reflect: !0 })
], E.prototype, "appearance", 2);
I([
  a({ type: String, reflect: !0 })
], E.prototype, "size", 2);
I([
  a({ type: Boolean, reflect: !0, attribute: "marginless" })
], E.prototype, "marginless", 1);
I([
  a({ type: Boolean })
], E.prototype, "withHint", 1);
I([
  a({ type: Boolean })
], E.prototype, "filterable", 1);
I([
  a({ type: Boolean, reflect: !0 })
], E.prototype, "multiple", 1);
I([
  a({ type: Boolean, attribute: "allow-clear" })
], E.prototype, "allowClear", 1);
I([
  a({ type: String, attribute: "required-indicator" })
], E.prototype, "requiredIndicator", 2);
I([
  b()
], E.prototype, "_open", 2);
I([
  b()
], E.prototype, "_focused", 2);
I([
  b()
], E.prototype, "_touched", 2);
I([
  b()
], E.prototype, "_invalid", 2);
I([
  b()
], E.prototype, "_filterQuery", 2);
I([
  b()
], E.prototype, "_focusedIndex", 2);
customElements.get(qs) || customElements.define(qs, E);
const Qn = 2, Zn = 4, Xn = 16, ea = f`
  :host {
    --slider-track-height: ${Qn}px;
    --slider-fill-height: ${Zn}px;
    --slider-thumb-size: ${Xn}px;
    display: inline-block;
  }

  :host([disabled]) {
    pointer-events: none;
    opacity: 0.6;
  }

  .swim-slider__inner {
    margin: 1em auto;
    position: relative;
    display: inline-block;
  }

  .swim-slider__inputs {
    position: relative;
    min-width: 12.5em;
    height: var(--slider-thumb-size);
  }

  .swim-slider__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    appearance: none;
    background-color: transparent;
    margin: 0;
    cursor: pointer;
  }

  .swim-slider__input:focus {
    outline: none;
  }

  .swim-slider__input:focus-visible {
    outline: 2px solid var(--blue-200);
    outline-offset: 2px;
  }

  .swim-slider__input::-webkit-slider-runnable-track {
    cursor: pointer;
    color: transparent;
    background: transparent;
    border-color: transparent;
    appearance: none;
  }

  .swim-slider__input::-moz-range-track {
    cursor: pointer;
    color: transparent;
    background: transparent;
    border-color: transparent;
    appearance: none;
  }

  .swim-slider__input::-ms-track {
    cursor: pointer;
    color: transparent;
    background: transparent;
    border-color: transparent;
    appearance: none;
  }

  .swim-slider__input::-webkit-slider-thumb {
    border: none;
    width: var(--slider-thumb-size);
    height: var(--slider-thumb-size);
    appearance: none;
    position: relative;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    z-index: 301;
    color: transparent;
  }

  .swim-slider__input::-moz-range-thumb {
    border: none;
    width: var(--slider-thumb-size);
    height: var(--slider-thumb-size);
    appearance: none;
    position: relative;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    z-index: 302;
    transform: scale(1);
  }

  .swim-slider__input::-ms-thumb {
    border: none;
    width: var(--slider-thumb-size);
    height: var(--slider-thumb-size);
    appearance: none;
    position: relative;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    z-index: 302;
    transform: scale(1);
  }

  .swim-slider__track {
    position: absolute;
    background-color: var(--blue-400);
    width: 100%;
    height: var(--slider-track-height);
    top: calc(var(--slider-thumb-size) * 0.5 - var(--slider-track-height) * 0.5);
    pointer-events: none;
    opacity: 0.3;
  }

  .swim-slider__thumb {
    position: absolute;
    background-color: var(--blue-400);
    height: var(--slider-thumb-size);
    width: var(--slider-thumb-size);
    border-radius: calc(var(--slider-thumb-size) * 0.5);
    pointer-events: none;
    z-index: 100;
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--blue-400) 30%, transparent);
    transition: box-shadow 0.3s ease-in-out;
    top: 0;
  }

  .swim-slider__thumb--active {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--blue-400) 30%, transparent);
  }

  .swim-slider__ticks {
    position: absolute;
    display: block;
    top: 0;
    width: 100%;
    height: 3px;
    opacity: 0.3;
  }

  .swim-slider__tick {
    position: absolute;
    border: none;
    height: 100%;
    width: 2px;
    background-color: var(--blue-400);
  }

  .swim-slider--filled .swim-slider__fill {
    background-repeat: no-repeat;
    background-image: linear-gradient(var(--blue-400), var(--blue-400));
    position: absolute;
    border-radius: 0;
    z-index: 99;
    pointer-events: none;
    height: var(--slider-fill-height);
    left: 0;
    top: calc(50% - var(--slider-fill-height) * 0.5);
    width: 100%;
  }

  .swim-slider--vertical {
    display: inline-block;
    height: initial;
    min-height: 12.5em;
    width: var(--slider-thumb-size);
  }

  .swim-slider--vertical .swim-slider__inner {
    transform: translate(0%, -100%) rotate(-90deg) translate(-100%, 0);
    transform-origin: top left;
  }
`;
var ta = Object.defineProperty, ia = Object.getOwnPropertyDescriptor, R = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? ia(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && ta(e, t, s), s;
};
let sa = 0;
const Hs = "swim-slider", Ft = class Ft extends _ {
  constructor() {
    super(), this.id = `swim-slider-${++sa}`, this._min = 0, this._max = 100, this._step = 1, this.orientation = "horizontal", this._filled = !1, this._multiple = !1, this._disabled = !1, this._showTicks = !1, this.ariaLabel = "", this._values = [0], this._active = [], this._internals = this.attachInternals();
  }
  get min() {
    return this._min;
  }
  set min(e) {
    this._min = S(e, 0);
  }
  get max() {
    return this._max;
  }
  set max(e) {
    this._max = S(e, 100);
  }
  get step() {
    return this._step;
  }
  set step(e) {
    this._step = S(e, 1);
  }
  get filled() {
    return this._filled;
  }
  set filled(e) {
    this._filled = p(e);
  }
  get multiple() {
    return this._multiple;
  }
  set multiple(e) {
    this._multiple = p(e);
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    this._disabled = p(e);
  }
  get showTicks() {
    return this._showTicks;
  }
  set showTicks(e) {
    this._showTicks = p(e);
  }
  get tickStep() {
    return this._tickStep ?? this._step;
  }
  set tickStep(e) {
    this._tickStep = e != null ? S(e, this._step) : void 0;
  }
  get value() {
    return this._values.length ? this.multiple ? [...this._values].sort((e, t) => e - t).join(",") : String(this._values[0]) : String(this._min);
  }
  set value(e) {
    const t = e != null ? String(e) : "", s = (t ? t.split(",").map((n) => S(n.trim(), this._min)) : [this._min]).map((n) => Math.max(this._min, Math.min(this._max, n)));
    let r;
    this.multiple ? r = s.length >= 2 ? s : s.length === 1 ? [s[0], this._max] : [this._min, this._max] : r = s.slice(0, 1), (r.length !== this._values.length || r.some((n, l) => n !== this._values[l])) && (this._values = r, this._syncFormValue());
  }
  connectedCallback() {
    super.connectedCallback(), (this._values.length === 0 || this._values.length === 1 && this._values[0] === 0 && this._min !== 0) && (this._values = this.multiple ? [this._min, this._max] : [this._min], this._syncFormValue());
  }
  updated(e) {
    super.updated(e), (e.has("value") || e.has("min") || e.has("max")) && this._syncFormValue();
  }
  _syncFormValue() {
    this._internals.setFormValue(this.value);
  }
  get _percents() {
    const e = this._max - this._min || 1;
    return this._values.map((t) => Math.round(100 * (Math.max(this._min, Math.min(this._max, t)) - this._min) / e));
  }
  get _thumbs() {
    return this._percents.map((e) => ({
      left: `calc(${e}% - ${e / 100}em)`
    }));
  }
  get _fill() {
    if (!this.filled) return null;
    const e = this._percents, t = this.multiple ? Math.min(...e) : 0, s = (this.multiple ? Math.max(...e) : e[0]) - t;
    return {
      left: `${t}%`,
      width: `${s}%`
    };
  }
  get _tickStepValue() {
    return this._tickStep ?? this._step;
  }
  get _ticks() {
    if (!this.showTicks) return [];
    const e = this._tickStepValue, t = [];
    let i = this._min;
    for (; i <= this._max; )
      t.push(i), i += e;
    const s = this._max - this._min || 1;
    return t.map((r) => {
      const n = 100 * (r - this._min) / s;
      return { left: `calc(${n}% - ${n / 100 - 0.5}em)` };
    });
  }
  _setValue(e, t) {
    const i = S(e, this._min), s = Math.max(this._min, Math.min(this._max, i));
    if (this._values[t] !== s) {
      const r = [...this._values];
      r[t] = s, this._values = r, this._syncFormValue(), this._emitChange();
    }
  }
  _onChange(e) {
    this._emitChange();
  }
  _emitChange() {
    const e = this.value, t = this.multiple ? this._percents.join(",") : String(this._percents[0]);
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { value: this.multiple ? e : Number(e), percent: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _setActive(e, t) {
    const i = [...this._active];
    i[e] = t, this._active = i;
  }
  _ensureValuesLength() {
    this.multiple && this._values.length < 2 ? this._values = [this._min, this._max] : !this.multiple && this._values.length > 1 && (this._values = [this._values[0]]);
  }
  willUpdate(e) {
    this._ensureValuesLength();
  }
  firstUpdated() {
    this._ensureValuesLength();
  }
  _onRangeInput(e, t) {
    const i = e.target.value;
    this._setValue(Number(i), t);
  }
  render() {
    const e = this.orientation === "vertical";
    return c`
      <div
        class="swim-slider ${e ? "swim-slider--vertical" : ""} ${this.filled ? "swim-slider--filled" : ""} ${this.multiple ? "swim-slider--multiple" : ""}"
        role="group"
        aria-label="${this.ariaLabel || void 0}"
      >
        <div class="swim-slider__inner">
          ${this.showTicks ? c`
                <div class="swim-slider__ticks" aria-hidden="true">
                  ${this._ticks.map((t) => c`<div class="swim-slider__tick" style="left: ${t.left}"></div>`)}
                </div>
              ` : ""}
          <div class="swim-slider__inputs">
            <div class="swim-slider__track" part="track" aria-hidden="true"></div>
            ${this._fill ? c`
                  <span
                    class="swim-slider__fill"
                    part="fill"
                    style="left: ${this._fill.left}; width: ${this._fill.width}"
                    aria-hidden="true"
                  ></span>
                ` : ""}
            ${this._values.map((t, i) => {
      const s = this._thumbs[i], r = this._active[i], n = `${this.id}-${i}`, l = this.ariaLabel ? `${this.ariaLabel}${this.multiple ? ` (thumb ${i + 1})` : ""}` : void 0;
      return c`
                <input
                  type="range"
                  class="swim-slider__input ${i % 2 === 1 ? "swim-slider__input--odd" : ""} ${r ? "swim-slider__input--active" : ""}"
                  id="${n}"
                  aria-valuemin="${this._min}"
                  aria-valuemax="${this._max}"
                  aria-valuenow="${t}"
                  aria-label="${l || void 0}"
                  .value="${String(t)}"
                  min="${this._min}"
                  max="${this._max}"
                  step="${this._step}"
                  ?disabled="${this.disabled}"
                  @input="${(d) => this._onRangeInput(d, i)}"
                  @change="${this._onChange}"
                  @mouseenter="${() => this._setActive(i, !0)}"
                  @mouseleave="${() => this._setActive(i, !1)}"
                  @focus="${() => this._setActive(i, !0)}"
                  @blur="${() => this._setActive(i, !1)}"
                />
                <div
                  class="swim-slider__thumb ${r ? "swim-slider__thumb--active" : ""}"
                  style="${s ? `left: ${s.left}` : ""}"
                  aria-hidden="true"
                  part="thumb"
                ></div>
              `;
    })}
          </div>
        </div>
      </div>
    `;
  }
};
Ft.styles = [y, ea], Ft.formAssociated = !0;
let F = Ft;
R([
  a({ type: String })
], F.prototype, "id", 2);
R([
  a({ type: Number })
], F.prototype, "min", 1);
R([
  a({ type: Number })
], F.prototype, "max", 1);
R([
  a({ type: Number })
], F.prototype, "step", 1);
R([
  a({ type: String, reflect: !0 })
], F.prototype, "orientation", 2);
R([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "filled", 1);
R([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "multiple", 1);
R([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "disabled", 1);
R([
  a({ type: Boolean, attribute: "show-ticks" })
], F.prototype, "showTicks", 1);
R([
  a({ type: Number, attribute: "tick-step" })
], F.prototype, "tickStep", 1);
R([
  a({ type: String, attribute: "aria-label" })
], F.prototype, "ariaLabel", 2);
R([
  a({ type: String })
], F.prototype, "value", 1);
R([
  b()
], F.prototype, "_values", 2);
R([
  b()
], F.prototype, "_active", 2);
customElements.get(Hs) || customElements.define(Hs, F);
const oa = f`
  :host {
    display: flex;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  :host([direction='row']) {
    flex-direction: row;
  }

  :host([direction='column']) {
    flex-direction: column;
  }

  slot {
    display: contents;
  }
`, ra = [y, oa];
var Ye = /* @__PURE__ */ ((o) => (o.Row = "row", o.Column = "column", o))(Ye || {});
function je(o) {
  const e = String(o).indexOf("calc") > -1;
  return String(o).indexOf("%") > -1 && !e;
}
function re(o) {
  return typeof o == "string" ? Number(o.replace(/%/g, "").replace(/px/g, "").trim()) : o;
}
function ko(o, e, t, i, s, r) {
  let n = o ? je(o) ? re(o) : re(o) / r : 0, l = e ? je(e) ? re(e) : re(e) / r : 100;
  return n = Math.max(n, i === "0" ? s : 0), l = Math.min(l, t === "0" ? s : 100), [n, l];
}
function Vs(o, e, t) {
  const [i, s, r] = o.currentFlexParts, n = je(r), l = re(r), d = o.initialFlexParts[2], h = je(d) ? re(d) : re(d) / t, w = n ? l * t : l;
  let m = w + e, g = m / t;
  const [k, T] = ko(o.minBasis, o.maxBasis, i, s, h, t);
  return g = Math.max(g, k), g = Math.min(g, T), m = g * t, o.updateBasis(n ? g + "%" : m + "px"), m - w;
}
var na = Object.defineProperty, Co = (o, e, t, i) => {
  for (var s = void 0, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = n(e, t, s) || s);
  return s && na(e, t, s), s;
};
const Rs = "swim-split", Oi = class Oi extends _ {
  constructor() {
    super(...arguments), this.direction = Ye.Row, this._areas = [], this._handles = [], this._handleListeners = /* @__PURE__ */ new Map(), this._onSlotChange = () => {
      this._collectAreasAndHandles(), this._removeHandleListeners(), this._attachHandleListeners();
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("slotchange", this._onSlotChange);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("slotchange", this._onSlotChange), this._removeHandleListeners();
  }
  updated(e) {
    e.has("direction") && this._handles.forEach((t) => {
      t.direction = this.direction;
    });
  }
  firstUpdated() {
    requestAnimationFrame(() => {
      this._collectAreasAndHandles(), this._attachHandleListeners();
    });
  }
  _collectAreasAndHandles() {
    if (!this.slotEl) return;
    const e = this.slotEl.assignedElements({ flatten: !0 });
    this._areas = e.filter((t) => {
      var i;
      return ((i = t.tagName) == null ? void 0 : i.toLowerCase()) === "swim-split-area";
    }), this._handles = e.filter((t) => {
      var i;
      return ((i = t.tagName) == null ? void 0 : i.toLowerCase()) === "swim-split-handle";
    }), this._handles.forEach((t) => {
      t.direction = this.direction;
    });
  }
  _attachHandleListeners() {
    this._handles.forEach((e) => {
      const t = (s) => {
        const r = s.detail;
        r && this._onDrag(r);
      }, i = () => this._onDblClick();
      this._handleListeners.set(e, { drag: t, dblclick: i }), e.addEventListener("drag", t), e.addEventListener("dblclick", i);
    });
  }
  _removeHandleListeners() {
    this._handles.forEach((e) => {
      const t = this._handleListeners.get(e);
      t && (e.removeEventListener("drag", t.drag), e.removeEventListener("dblclick", t.dblclick), this._handleListeners.delete(e));
    });
  }
  _resize(e) {
    const s = (this.direction === Ye.Row ? this.clientWidth : this.clientHeight) / 100, r = this._areas;
    if (r.length === 0) return;
    const [n, ...l] = r;
    let d = e;
    d = Vs(n, d, s), l.forEach((h) => {
      d += Vs(h, -d, s);
    });
  }
  _onDrag(e) {
    const t = this.direction === Ye.Row ? e.movementX : e.movementY;
    this._resize(t);
  }
  _onDblClick() {
    const i = (this.direction === Ye.Row ? this.clientWidth : this.clientHeight) / 100, r = this._areas[0];
    if (!r) return;
    const [n, l, d] = r.currentFlexParts, h = je(d), w = re(d), g = (h ? w * i : w) / i, k = r.initialFlexParts[2], T = je(k) ? re(k) : re(k) / i, [te, et] = ko(
      r.minBasis,
      r.maxBasis,
      n,
      l,
      T,
      i
    ), tt = g - te, Yi = et - g, Io = (tt < Yi ? Yi : -tt) * i;
    this._resize(Io);
  }
  render() {
    return c`<slot></slot>`;
  }
};
Oi.styles = ra;
let bt = Oi;
Co([
  a({ type: String, reflect: !0 })
], bt.prototype, "direction");
Co([
  q("slot")
], bt.prototype, "slotEl");
customElements.get(Rs) || customElements.define(Rs, bt);
const aa = f`
  :host {
    overflow: hidden;
    box-sizing: border-box;
    min-height: 0;
  }
`, la = [y, aa];
function Ao(o) {
  const [e, t, i] = o;
  return `${e} ${t} ${i}`;
}
function Ue(o, e, t) {
  const i = t.split(" ");
  return i.length === 3 ? i : [o, e, t];
}
var ca = Object.defineProperty, da = Object.getOwnPropertyDescriptor, qt = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? da(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && ca(e, t, s), s;
};
const rt = "1 1 1e-9px", Ys = "swim-split-area", Pi = class Pi extends _ {
  constructor() {
    super(...arguments), this._areaBasis = rt, this.shouldAdjustMaxMin = !1, this.initialFlexParts = Ue("1", "1", rt), this.currentFlexParts = Ue("1", "1", rt);
  }
  get areaBasis() {
    return this._areaBasis;
  }
  set areaBasis(e) {
    this._areaBasis !== e && (this._areaBasis = e || rt, this._applyBasis());
  }
  connectedCallback() {
    super.connectedCallback(), this._applyBasis();
  }
  updated() {
    this.style.flex = Ao(this.currentFlexParts), this.shouldAdjustMaxMin && this.currentFlexParts[2] ? (this.style.minWidth = this.currentFlexParts[2], this.style.maxWidth = this.currentFlexParts[2]) : (this.style.minWidth = "", this.style.maxWidth = "");
  }
  updateBasis(e) {
    this.currentFlexParts[2] = e, this.requestUpdate();
  }
  _applyBasis() {
    const e = this._areaBasis || rt, [t, i, s] = Ue("1", "1", e);
    this.currentFlexParts = [t, i, s], this.initialFlexParts = [t, i, s], !this.minBasis && i === "0" && (this.minBasis = s), !this.maxBasis && t === "0" && (this.maxBasis = s), this.requestUpdate();
  }
  render() {
    return c`<slot></slot>`;
  }
};
Pi.styles = la;
let $e = Pi;
qt([
  a({ type: String, attribute: "area-basis" })
], $e.prototype, "areaBasis", 1);
qt([
  a({ type: String, attribute: "min-basis" })
], $e.prototype, "minBasis", 2);
qt([
  a({ type: String, attribute: "max-basis" })
], $e.prototype, "maxBasis", 2);
qt([
  a({ type: Boolean, attribute: "should-adjust-max-min" })
], $e.prototype, "shouldAdjustMaxMin", 2);
customElements.get(Ys) || customElements.define(Ys, $e);
const ha = f`
  :host {
    position: relative;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .swim-split-handle__grip {
    line-height: 0;
    font-size: var(--font-size-4xl);
    position: absolute;
    display: block;
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;
    color: var(--grey-400);
    cursor: inherit;
  }

  .swim-split-handle__grip:hover {
    color: var(--grey-200);
  }

  .swim-split-handle__grip:focus {
    outline: none;
  }

  .swim-split-handle__grip:focus-visible {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
  }

  :host([direction='row']) .swim-split-handle__grip {
    top: 50%;
    left: 50%;
    cursor: col-resize;
    transform: translate(-50%, -50%);
  }

  :host([direction='column']) .swim-split-handle__grip {
    left: 50%;
    cursor: row-resize;
    top: -3px;
    transform: translateX(-50%) rotate(270deg);
  }
`, ua = [y, ha];
var pa = Object.defineProperty, ma = Object.getOwnPropertyDescriptor, Eo = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? ma(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && pa(e, t, s), s;
};
const wt = "0 0 15px", Us = "swim-split-handle", $i = class $i extends _ {
  constructor() {
    super(...arguments), this._handleBasis = wt, this.direction = Ye.Row, this.currentFlexParts = Ue("0", "0", wt), this._boundMouseUp = this._onMouseUp.bind(this), this._boundMouseMove = this._onMouseMove.bind(this);
  }
  get handleBasis() {
    return this._handleBasis;
  }
  set handleBasis(e) {
    this._handleBasis !== e && (this._handleBasis = e || wt, this.currentFlexParts = Ue("0", "0", this._handleBasis), this.requestUpdate());
  }
  connectedCallback() {
    super.connectedCallback(), this.currentFlexParts = Ue("0", "0", this._handleBasis || wt);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("mouseup", this._boundMouseUp, !0), document.removeEventListener("mousemove", this._boundMouseMove, !0);
  }
  updated() {
    this.style.flex = Ao(this.currentFlexParts);
  }
  _onMouseDown(e) {
    e.preventDefault(), document.addEventListener("mouseup", this._boundMouseUp, !0), document.addEventListener("mousemove", this._boundMouseMove, !0), this.dispatchEvent(new CustomEvent("dragstart", { detail: e, bubbles: !0, composed: !0 }));
  }
  _onMouseMove(e) {
    this.dispatchEvent(new CustomEvent("drag", { detail: e, bubbles: !0, composed: !0 }));
  }
  _onMouseUp(e) {
    document.removeEventListener("mouseup", this._boundMouseUp, !0), document.removeEventListener("mousemove", this._boundMouseMove, !0), this.dispatchEvent(new CustomEvent("dragend", { detail: e, bubbles: !0, composed: !0 }));
  }
  _onDblClick(e) {
    this.dispatchEvent(new CustomEvent("dblclick", { detail: e, bubbles: !0, composed: !0 }));
  }
  render() {
    return c`
      <button
        type="button"
        class="swim-split-handle__grip"
        aria-label="Resize split"
        @mousedown="${this._onMouseDown}"
        @dblclick="${this._onDblClick}"
      >
        <swim-icon font-icon="split-handle"></swim-icon>
      </button>
    `;
  }
};
$i.styles = ua;
let gt = $i;
Eo([
  a({ type: String, attribute: "handle-basis" })
], gt.prototype, "handleBasis", 1);
Eo([
  a({ type: String, reflect: !0 })
], gt.prototype, "direction", 2);
customElements.get(Us) || customElements.define(Us, gt);
const ba = f`
  ${y}

  @keyframes swim-progress-spinner--rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .swim-progress-spinner__container {
    display: inline-flex;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: 0 0 10px 0 var(--spinner-color);
    position: relative;
  }

  .swim-progress-spinner__svg {
    display: block;
  }

  .swim-progress-spinner__circle {
    fill: transparent;
    transition: 0.1s stroke-dashoffset;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke: var(--spinner-color);
  }

  .swim-progress-spinner__icon-in-progress,
  .swim-progress-spinner__icon-complete,
  .swim-progress-spinner__icon-failure {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  /* Size and color for slotted or property-driven swim-icon in center */
  .swim-progress-spinner__icon-in-progress swim-icon,
  .swim-progress-spinner__icon-complete swim-icon,
  .swim-progress-spinner__icon-failure swim-icon {
    font-size: var(--font-size-5xl);
    color: var(--spinner-color);
  }

  .swim-progress-spinner__icon-failure swim-icon {
    color: var(--color-error, var(--red-500));
  }

  .swim-progress-spinner__label {
    margin-top: var(--spacing-24, 24px);
  }

  .swim-progress-spinner__label h4 {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-2xl);
    line-height: 30px;
    text-align: center;
    color: var(--white);
    margin: 0;
  }

  /* Indeterminate: rotating circle */
  :host([mode='indeterminate']) .swim-progress-spinner__circle {
    animation: swim-progress-spinner--rotate 1s linear infinite;
  }
`;
var Ve = /* @__PURE__ */ ((o) => (o.Indeterminate = "indeterminate", o.Determinate = "determinate", o))(Ve || {}), _e = /* @__PURE__ */ ((o) => (o.Default = "default", o.Icon = "icon", o))(_e || {}), ga = Object.defineProperty, fa = Object.getOwnPropertyDescriptor, W = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? fa(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && ga(e, t, s), s;
};
const _a = 50, wa = 100, ti = 100, xt = ti / 2, va = xt * 2 * Math.PI, ya = "cloud-upload", xa = "check", ka = "x", Ns = "swim-progress-spinner", Fi = class Fi extends _ {
  constructor() {
    super(...arguments), this.mode = Ve.Indeterminate, this.color = "var(--blue-500)", this.failStatusColor = "var(--red-500)", this.appearance = _e.Default, this.inProgressIconName = "", this.completeIconName = "", this.failIconName = "", this._isFailure = !1, this._value = 0, this._total = 100, this._diameter = 100, this._strokeWidth = 3, this._boundSlotChange = () => this.requestUpdate();
  }
  get isFailure() {
    return this._isFailure;
  }
  set isFailure(e) {
    this._isFailure = p(e);
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = S(e, 0);
    this._value !== t && (this._value = t);
  }
  get total() {
    return this._total;
  }
  set total(e) {
    const t = S(e, 100);
    this._total !== t && (this._total = t);
  }
  get diameter() {
    return this._diameter;
  }
  set diameter(e) {
    const t = S(e, 100);
    this._diameter !== t && (this._diameter = t);
  }
  get strokeWidth() {
    return this._strokeWidth;
  }
  set strokeWidth(e) {
    const t = S(e, 3);
    this._strokeWidth !== t && (this._strokeWidth = t);
  }
  /** Circumference in viewBox units for stroke-dasharray/offset (fixed viewBox 0 0 100 100). */
  get circumference() {
    return va;
  }
  get modeValue() {
    return this.mode === Ve.Determinate || this.isComplete ? this.value : _a;
  }
  get modeTotal() {
    return this.mode === Ve.Determinate || this.isComplete ? this.total : wa;
  }
  get percentage() {
    return 100 / this.modeTotal * this.modeValue;
  }
  get isComplete() {
    return this.value >= this.total && this.total > 0;
  }
  get spinnerColor() {
    return this.isComplete && this.isFailure ? this.failStatusColor : this.color;
  }
  get strokeDasharray() {
    return `${this.circumference} ${this.circumference}`;
  }
  get strokeDashoffset() {
    return this.circumference - this.percentage / 100 * this.circumference;
  }
  hasSlotContent(e) {
    var i;
    const t = (i = this.shadowRoot) == null ? void 0 : i.querySelector(`slot[name="${e}"]`);
    return !!(t != null && t.assignedNodes().length);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("slotchange", this._boundSlotChange);
  }
  disconnectedCallback() {
    this.removeEventListener("slotchange", this._boundSlotChange), super.disconnectedCallback();
  }
  /** Resolved icon name for in-progress: slot/prop or default. */
  get effectiveInProgressIcon() {
    return this.hasSlotContent("in-progress-icon") ? "" : this.inProgressIconName || (this.appearance === _e.Icon ? ya : "");
  }
  /** Resolved icon name for complete: slot/prop or default. */
  get effectiveCompleteIcon() {
    return this.hasSlotContent("complete-icon") ? "" : this.completeIconName || (this.appearance === _e.Icon ? xa : "");
  }
  /** Resolved icon name for failure: slot/prop or default. */
  get effectiveFailIcon() {
    return this.hasSlotContent("fail-icon") ? "" : this.failIconName || (this.appearance === _e.Icon ? ka : "");
  }
  render() {
    const e = this.appearance === _e.Icon && !this.isComplete && (this.effectiveInProgressIcon || this.hasSlotContent("in-progress-icon")), t = this.appearance === _e.Icon && this.isComplete && !this.isFailure && (this.effectiveCompleteIcon || this.hasSlotContent("complete-icon")), i = this.appearance === _e.Icon && this.isComplete && this.isFailure && (this.effectiveFailIcon || this.hasSlotContent("fail-icon"));
    return c`
      <div
        class="swim-progress-spinner__container ${this.appearance === _e.Icon ? "swim-progress-spinner__container--icon" : ""}"
        part="container"
        style="--spinner-color: ${this.spinnerColor}"
        role="progressbar"
        aria-valuenow="${this.mode === Ve.Determinate ? this.value : u}"
        aria-valuemin="0"
        aria-valuemax="${this.mode === Ve.Determinate ? this.total : u}"
        aria-label="Progress"
      >
        <svg
          class="swim-progress-spinner__svg"
          viewBox="0 0 ${ti} ${ti}"
          width="${this.diameter}"
          height="${this.diameter}"
          aria-hidden="true"
          focusable="false"
        >
          <circle
            class="swim-progress-spinner__circle"
            stroke-width="${this.strokeWidth}"
            stroke-dasharray="${this.strokeDasharray}"
            stroke-dashoffset="${this.strokeDashoffset}"
            r="${xt}"
            cx="${xt}"
            cy="${xt}"
          ></circle>
        </svg>

        ${e ? c`
              <div class="swim-progress-spinner__icon-in-progress">
                ${this.hasSlotContent("in-progress-icon") ? c`<slot name="in-progress-icon"></slot>` : c`<swim-icon font-icon="${this.effectiveInProgressIcon}"></swim-icon>`}
              </div>
            ` : t ? c`
              <div class="swim-progress-spinner__icon-complete">
                ${this.hasSlotContent("complete-icon") ? c`<slot name="complete-icon"></slot>` : c`<swim-icon font-icon="${this.effectiveCompleteIcon}"></swim-icon>`}
              </div>
            ` : i ? c`
              <div class="swim-progress-spinner__icon-failure">
                ${this.hasSlotContent("fail-icon") ? c`<slot name="fail-icon"></slot>` : c`<swim-icon font-icon="${this.effectiveFailIcon}"></swim-icon>`}
              </div>
            ` : u}
      </div>

      ${this.spinnerLabel ? c`
            <div class="swim-progress-spinner__label" part="label">
              ${!this.isComplete && this.spinnerLabel.inProgressLabel ? c`<h4>${this.spinnerLabel.inProgressLabel}</h4>` : this.isComplete && !this.isFailure && this.spinnerLabel.completeLabel ? c`<h4>${this.spinnerLabel.completeLabel}</h4>` : this.isComplete && this.isFailure && this.spinnerLabel.failLabel ? c`<h4>${this.spinnerLabel.failLabel}</h4>` : u}
            </div>
          ` : u}
    `;
  }
};
Fi.styles = ba;
let L = Fi;
W([
  a({ type: String, reflect: !0 })
], L.prototype, "mode", 2);
W([
  a({ type: String })
], L.prototype, "color", 2);
W([
  a({ attribute: "fail-status-color", type: String })
], L.prototype, "failStatusColor", 2);
W([
  a({ type: String, reflect: !0 })
], L.prototype, "appearance", 2);
W([
  a({ type: String, attribute: "in-progress-icon-name" })
], L.prototype, "inProgressIconName", 2);
W([
  a({ type: String, attribute: "complete-icon-name" })
], L.prototype, "completeIconName", 2);
W([
  a({ type: String, attribute: "fail-icon-name" })
], L.prototype, "failIconName", 2);
W([
  a({ type: Boolean, reflect: !0, attribute: "is-failure" })
], L.prototype, "isFailure", 1);
W([
  a({ attribute: !1 })
], L.prototype, "spinnerLabel", 2);
W([
  a({ type: Number })
], L.prototype, "value", 1);
W([
  a({ type: Number })
], L.prototype, "total", 1);
W([
  a({ type: Number })
], L.prototype, "diameter", 1);
W([
  a({ attribute: "stroke-width", type: Number })
], L.prototype, "strokeWidth", 1);
customElements.get(Ns) || customElements.define(Ns, L);
const Ca = f`
  :host {
    display: block;
  }

  .swim-tab__panel {
    display: block;
  }

  .swim-tab__panel[hidden] {
    display: none;
  }
`;
var Aa = Object.defineProperty, Ea = Object.getOwnPropertyDescriptor, Xe = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Ea(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && Aa(e, t, s), s;
};
let za = 0;
const Gs = "swim-tab", Bi = class Bi extends _ {
  constructor() {
    super(...arguments), this._instanceId = ++za, this._generatedPanelId = `tab-panel-${this._instanceId}`, this._generatedTabId = `tab-${this._instanceId}`, this.tabId = this._generatedTabId, this.label = "", this._active = !1, this._disabled = !1;
  }
  get id() {
    return this._id ?? this._generatedPanelId;
  }
  set id(e) {
    this._id = e || this._generatedPanelId;
  }
  get title() {
    return this.label;
  }
  set title(e) {
    this.label = e;
  }
  get active() {
    return this._active;
  }
  set active(e) {
    const t = p(e);
    if (this._active !== t) {
      const i = this._active;
      this._active = t, this.requestUpdate("active", i), this.dispatchEvent(new CustomEvent("swim-tab-active-change", { bubbles: !0, composed: !0 }));
    }
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    this._disabled = p(e);
  }
  connectedCallback() {
    super.connectedCallback(), this.hasAttribute("tab-id") || (this.tabId = this._generatedTabId);
  }
  render() {
    return c`
      <div
        class="swim-tab__panel"
        role="tabpanel"
        id="${this.id}"
        aria-labelledby="${this.tabId}"
        ?hidden="${!this.active}"
      >
        <slot></slot>
      </div>
    `;
  }
};
Bi.styles = [y, Ca];
let ae = Bi;
Xe([
  a({ type: String })
], ae.prototype, "id", 1);
Xe([
  a({ type: String, attribute: "tab-id" })
], ae.prototype, "tabId", 2);
Xe([
  a({ type: String })
], ae.prototype, "label", 2);
Xe([
  a({ type: String })
], ae.prototype, "title", 1);
Xe([
  a({ type: Boolean, reflect: !0 })
], ae.prototype, "active", 1);
Xe([
  a({ type: Boolean, reflect: !0 })
], ae.prototype, "disabled", 1);
customElements.get(Gs) || customElements.define(Gs, ae);
const Sa = f`
  :host {
    display: block;
    margin-bottom: 2em;
  }

  .swim-tabs {
    display: block;
  }

  /* Tab list – horizontal by default */
  .swim-tabs__list {
    display: block;
    border-bottom: solid 2px var(--grey-700);
  }

  .swim-tabs__tab {
    display: inline-block;
    border: none;
    color: var(--grey-250);
    background: transparent;
    box-shadow: none;
    font-size: var(--font-size-m);
    box-sizing: border-box;
    margin: 0;
    padding: 0.35em 0.75em;
    position: relative;
    text-align: center;
    user-select: none;
    font: inherit;
    font-weight: var(--font-weight-bold);
    bottom: -1px;
    cursor: pointer;
  }

  .swim-tabs__tab::after {
    content: '';
    height: 2px;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -1px;
    transition: transform 250ms ease;
    transform: scale(0);
    background: var(--blue-500);
    color: var(--white);
  }

  .swim-tabs__tab:not([disabled]):hover {
    border: none;
    color: var(--white);
    background: transparent;
    opacity: 1;
  }

  .swim-tabs__tab:not([disabled]):hover::after,
  .swim-tabs__tab--active::after {
    transform: scale(1);
  }

  .swim-tabs__tab--active,
  .swim-tabs__tab--active:focus,
  .swim-tabs__tab--active:hover {
    color: var(--white);
    border-width: 0;
  }

  .swim-tabs__tab:focus-visible {
    outline: 2px solid var(--blue-200);
    border-radius: var(--radius-2);
    outline-offset: 1px;
  }

  .swim-tabs__tab--disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  /* Tab content area */
  .swim-tabs__content {
    padding: var(--spacing-10);
  }

  /* Light appearance */
  :host([appearance='light']) .swim-tabs {
    border: 2px solid var(--grey-700);
    box-shadow: var(--shadow-2);
  }

  :host([appearance='light']) .swim-tabs__list {
    background-color: var(--grey-700);
    border-bottom: 2px solid var(--grey-700);
    font-size: var(--font-size-s);
    line-height: 15px;
    font-weight: var(--font-weight-semibold);
    margin-left: -2px;
  }

  :host([appearance='light']) .swim-tabs__tab {
    height: 36px;
    padding: var(--spacing-8) 1.25em;
  }

  :host([appearance='light']) .swim-tabs__content {
    background-color: var(--grey-850);
  }

  /* Vertical layout */
  :host([vertical]) .swim-tabs {
    display: flex;
  }

  :host([vertical]) .swim-tabs__list {
    flex: 0 0 160px;
    border: none;
  }

  :host([vertical]) .swim-tabs__tab {
    height: 53px;
    width: 100%;
    text-align: left;
    font-size: var(--font-size-s);
    line-height: 45px;
    border: none !important;
    border-bottom: 1px solid var(--grey-700) !important;
    padding-left: 19px;
    font-weight: var(--font-weight-semibold);
  }

  :host([vertical]) .swim-tabs__tab::after {
    display: none;
  }

  :host([vertical]) .swim-tabs__content {
    flex: 1 1 100%;
  }

  /* Vertical + light */
  :host([vertical][appearance='light']) .swim-tabs__list {
    background-color: var(--grey-750);
    border-right: 2px solid var(--grey-700);
    border-left: 2px solid var(--grey-700);
  }

  :host([vertical][appearance='light']) .swim-tabs__tab {
    line-height: 38px;
  }

  :host([vertical][appearance='light']) .swim-tabs__tab:last-child {
    border: none !important;
    border-bottom: none !important;
  }

  :host([vertical][appearance='light']) .swim-tabs__content {
    background-color: var(--grey-750);
  }
`;
var zo = /* @__PURE__ */ ((o) => (o.Legacy = "legacy", o.Light = "light", o))(zo || {}), Ia = Object.defineProperty, Da = Object.getOwnPropertyDescriptor, Ht = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Da(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && Ia(e, t, s), s;
};
const Js = "swim-tabs", Li = class Li extends _ {
  constructor() {
    super(...arguments), this._vertical = !1, this.appearance = zo.Legacy, this._tabs = [], this._slotChangeBound = () => this._syncTabs(), this._tabActiveChangeBound = () => this.requestUpdate();
  }
  get vertical() {
    return this._vertical;
  }
  set vertical(e) {
    this._vertical = p(e);
  }
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated() {
    this._syncTabs(), this._listenToTabChanges();
    const e = this.slotEl;
    e && e.addEventListener("slotchange", this._slotChangeBound);
  }
  disconnectedCallback() {
    var t;
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector("slot");
    e && e.removeEventListener("slotchange", this._slotChangeBound), this._tabs.forEach((i) => i.removeEventListener("swim-tab-active-change", this._tabActiveChangeBound)), super.disconnectedCallback();
  }
  _listenToTabChanges() {
    this._tabs.forEach((e) => e.addEventListener("swim-tab-active-change", this._tabActiveChangeBound));
  }
  _syncTabs() {
    var r;
    const e = (r = this.shadowRoot) == null ? void 0 : r.querySelector("slot"), i = ((e == null ? void 0 : e.assignedElements({ flatten: !0 })) ?? []).filter((n) => n instanceof ae);
    this._tabs.forEach((n) => n.removeEventListener("swim-tab-active-change", this._tabActiveChangeBound)), this._tabs = i, this._listenToTabChanges();
    const s = i.filter((n) => n.active);
    s.length > 1 ? console.error('swim-tabs: Multiple active tabs set "active".') : s.length === 0 && i.length > 0 && (i[0].active = !0);
  }
  _tabClicked(e) {
    e.disabled || (this._tabs.forEach((t) => t.active = t === e), e.active = !0, this.dispatchEvent(
      new CustomEvent("select-tab", {
        detail: { tab: e },
        bubbles: !0,
        composed: !0
      })
    ), this.dispatchEvent(
      new CustomEvent("select", {
        detail: { tab: e },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  _move(e) {
    const t = this._tabs, i = t.findIndex((s) => s.active);
    for (let s = i + e; s >= 0 && s < t.length; s += e) {
      const r = t[s];
      if (r && !r.disabled) {
        this._tabClicked(r);
        return;
      }
    }
  }
  /** Go to the previous tab. */
  prev() {
    this._move(-1);
  }
  /** Go to the next tab. */
  next() {
    this._move(1);
  }
  _handleKeyDown(e) {
    const t = this.vertical, i = e.key;
    t && (i === "ArrowUp" || i === "ArrowDown") ? (e.preventDefault(), this._move(i === "ArrowDown" ? 1 : -1)) : !t && (i === "ArrowLeft" || i === "ArrowRight") && (e.preventDefault(), this._move(i === "ArrowRight" ? 1 : -1));
  }
  render() {
    const e = this._tabs;
    return c`
      <section class="swim-tabs">
        <div class="swim-tabs__list" part="tablist" role="tablist" @keydown="${this._handleKeyDown}">
          ${e.map(
      (t) => c`
              <button
                type="button"
                role="tab"
                id="${t.tabId}"
                aria-controls="${t.id}"
                aria-selected="${t.active}"
                class="swim-tabs__tab ${t.active ? "swim-tabs__tab--active" : ""} ${t.disabled ? "swim-tabs__tab--disabled" : ""}"
                ?disabled="${t.disabled}"
                @click="${() => this._tabClicked(t)}"
              >
                ${t.label}
              </button>
            `
    )}
        </div>
        <div class="swim-tabs__content" part="tab-content">
          <slot></slot>
        </div>
      </section>
    `;
  }
};
Li.styles = [y, Sa];
let Fe = Li;
Ht([
  q("slot")
], Fe.prototype, "slotEl", 2);
Ht([
  a({ type: Boolean, reflect: !0 })
], Fe.prototype, "vertical", 1);
Ht([
  a({ type: String, reflect: !0 })
], Fe.prototype, "appearance", 2);
Ht([
  b()
], Fe.prototype, "_tabs", 2);
customElements.get(Js) || customElements.define(Js, Fe);
const Ma = f`
  :host {
    display: inline-block;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) .swim-toggle__track,
  :host([disabled]) .swim-toggle__text {
    cursor: not-allowed;
  }

  .swim-toggle {
    display: inline-flex;
    align-items: center;
    margin-top: var(--spacing-8);
    margin-bottom: var(--spacing-16);
  }

  .swim-toggle__input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
    pointer-events: none;
  }

  .swim-toggle__roving {
    outline: none;
  }

  .swim-toggle__roving:focus-visible {
    outline: 2px solid var(--blue-200);
    outline-offset: 2px;
  }

  .swim-toggle__track {
    position: relative;
    display: inline-block;
    height: 14px;
    width: 36px;
    background: var(--grey-900);
    border-radius: 100px;
    cursor: pointer;
    transition: background 0.3s ease;
    vertical-align: middle;
    margin-bottom: 3px;
    user-select: none;
  }

  .swim-toggle__track[aria-checked='true'] {
    background: var(--blue-700);
  }

  .swim-toggle__thumb {
    position: absolute;
    left: 0;
    top: -3px;
    display: block;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background: var(--grey-400);
    box-shadow: 0 3px 3px var(--grey-900);
    content: '';
    transition: left 0.3s ease, background 0.3s ease;
  }

  .swim-toggle__track[aria-checked='true'] .swim-toggle__thumb {
    left: 16px;
    background: var(--blue-500);
  }

  .swim-toggle__icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  /* Check icon when on: nudge tick to the left (thumb is on right) */
  .swim-toggle__icon--on {
    justify-content: flex-start;
    padding-left: 2px;
  }

  /* X icon when off: nudge cross to the right (thumb is on left) */
  .swim-toggle__icon--off {
    justify-content: flex-end;
    padding-right: 2px;
  }

  /* Constrain swim-icon so it centers vertically in the 14px track; override inline-block/baseline */
  .swim-toggle__icon swim-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    vertical-align: middle;
    block-size: 14px;
    min-inline-size: 14px;
    box-sizing: border-box;
  }

  .swim-toggle__icon--on swim-icon {
    opacity: 0.5;
    color: var(--white);
    font-size: var(--font-size-xxs);
    padding: 2.5px 3.5px;
  }

  .swim-toggle__icon--off swim-icon {
    opacity: 0.7;
    color: var(--grey-400);
    font-size: var(--font-size-xxs);
    font-weight: 900;
    padding: 3.5px 4.5px;
  }

  .swim-toggle__text {
    cursor: pointer;
    padding-left: 5px;
    color: var(--grey-100);
    font-size: var(--font-size-m);
    line-height: var(--font-line-height-200);
    margin: 0;
  }
`;
var Ta = Object.defineProperty, Oa = Object.getOwnPropertyDescriptor, ke = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Oa(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && Ta(e, t, s), s;
};
const Pa = {
  fromAttribute: (o) => o !== "false" && o !== "",
  toAttribute: (o) => o ? "true" : "false"
};
let $a = 0;
const Ks = "swim-toggle", Bt = class Bt extends _ {
  constructor() {
    super(), this.id = `swim-toggle-${++$a}`, this.name = "", this.label = "", this._checked = !1, this._disabled = !1, this._required = !1, this._showIcons = !0, this._tabindex = 0, this._internals = this.attachInternals();
  }
  get checked() {
    return this._checked;
  }
  set checked(e) {
    const t = p(e);
    this._checked !== t && (this._checked = t, this._syncFormValue());
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    this._disabled = p(e);
  }
  get required() {
    return this._required;
  }
  set required(e) {
    this._required = p(e);
  }
  get showIcons() {
    return this._showIcons;
  }
  set showIcons(e) {
    this._showIcons = e != null ? p(e) : !0;
  }
  get tabindex() {
    return this._tabindex;
  }
  set tabindex(e) {
    this._tabindex = S(e, 0);
  }
  connectedCallback() {
    super.connectedCallback(), this._syncFormValue();
  }
  updated(e) {
    super.updated(e), (e.has("checked") || e.has("_checked")) && this._syncFormValue();
  }
  focus(e) {
    var t;
    (t = this._roving) == null || t.focus(e);
  }
  _syncFormValue() {
    var t;
    this._internals.setFormValue(this._checked ? "on" : ""), this.required && !this._checked ? this._internals.setValidity({ valueMissing: !0 }, "This field is required") : this._internals.setValidity({});
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".swim-toggle__input");
    e && (e.checked = this._checked, e.required = this.required);
  }
  _onClick(e) {
    e.preventDefault(), !this.disabled && this._toggle();
  }
  _onKeydown(e) {
    e.key !== " " && e.key !== "Enter" || (e.preventDefault(), !this.disabled && this._toggle());
  }
  _toggle() {
    this.checked = !this.checked, this._emitChange();
  }
  _emitChange() {
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          stopPropagation: () => {
          },
          timeStamp: Date.now(),
          target: { checked: this._checked }
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _onFocus(e) {
    this.dispatchEvent(new FocusEvent("focus", { ...e, bubbles: !0, composed: !0 }));
  }
  _onBlur(e) {
    this.dispatchEvent(new FocusEvent("blur", { ...e, bubbles: !0, composed: !0 }));
  }
  _onInputChange(e) {
    const t = e.target;
    this._checked !== t.checked && (this._checked = t.checked, this.requestUpdate(), this._syncFormValue(), this._emitChange());
  }
  render() {
    const e = `${this.id}-text`;
    return c`
      <div class="swim-toggle">
        <input
          class="swim-toggle__input"
          type="checkbox"
          id="${this.id}"
          name="${this.name || void 0}"
          ?checked="${this._checked}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          tabindex="-1"
          aria-hidden="true"
          @change="${this._onInputChange}"
        />
        <div
          class="swim-toggle__roving swim-toggle__track"
          part="track"
          role="switch"
          tabindex="${this.disabled ? -1 : this.tabindex}"
          aria-checked="${this._checked}"
          aria-disabled="${this.disabled ? "true" : "false"}"
          aria-labelledby="${e}"
          @click="${this._onClick}"
          @keydown="${this._onKeydown}"
          @focus="${this._onFocus}"
          @blur="${this._onBlur}"
        >
          <span class="swim-toggle__thumb" part="thumb"></span>
          ${this.showIcons ? this._checked ? c`<span class="swim-toggle__icon swim-toggle__icon--on" aria-hidden="true"
                  ><swim-icon font-icon="check"></swim-icon
                ></span>` : c`<span class="swim-toggle__icon swim-toggle__icon--off" aria-hidden="true"
                  ><swim-icon font-icon="x"></swim-icon
                ></span>` : ""}
        </div>
        <label class="swim-toggle__text" part="text" id="${e}" for="${this.id}">
          ${this.label ? c`<span>${this.label}</span>` : ""}
          <slot></slot>
        </label>
      </div>
    `;
  }
};
Bt.styles = [y, Ma], Bt.formAssociated = !0;
let X = Bt;
ke([
  q(".swim-toggle__roving")
], X.prototype, "_roving", 2);
ke([
  a({ type: String })
], X.prototype, "id", 2);
ke([
  a({ type: String })
], X.prototype, "name", 2);
ke([
  a({ type: String })
], X.prototype, "label", 2);
ke([
  a({ type: Boolean, reflect: !0, attribute: "checked" })
], X.prototype, "checked", 1);
ke([
  a({ type: Boolean, reflect: !0 })
], X.prototype, "disabled", 1);
ke([
  a({ type: Boolean, reflect: !0 })
], X.prototype, "required", 1);
ke([
  a({ type: Boolean, attribute: "show-icons", converter: Pa })
], X.prototype, "showIcons", 1);
ke([
  a({ type: Number })
], X.prototype, "tabindex", 1);
customElements.get(Ks) || customElements.define(Ks, X);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ii extends di {
  constructor(e) {
    if (super(e), this.it = u, e.type !== Ae.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === u || e == null) return this._t = void 0, this.it = e;
    if (e === Q) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.it) return this._t;
    this.it = e;
    const t = [e];
    return t.raw = t, this._t = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
ii.directiveName = "unsafeHTML", ii.resultType = 1;
const Fa = ci(ii), Ba = f`
  :host {
    display: inline-block;
  }

  .swim-tooltip__trigger {
    display: inline-block;
    cursor: inherit;
  }

  .swim-tooltip__panel {
    position: fixed;
    z-index: 5000;
    display: block;
    font-weight: normal;
    opacity: 0;
    max-width: 600px;
    overflow-wrap: anywhere;
    border-radius: var(--radius-4);
    pointer-events: auto;
  }

  .swim-tooltip__panel--animate {
    opacity: 1;
    transition: opacity 0.3s, transform 0.3s;
    transform: translate3d(0, 0, 0);
  }

  .swim-tooltip__panel--narrow {
    max-width: 300px;
    text-align: center;
  }

  /* Placement transform (initial offset before animate) */
  .swim-tooltip__panel--position-right {
    transform: translate3d(10px, 0, 0);
  }

  .swim-tooltip__panel--position-left {
    transform: translate3d(-10px, 0, 0);
  }

  .swim-tooltip__panel--position-top {
    transform: translate3d(0, -10px, 0);
  }

  .swim-tooltip__panel--position-bottom {
    transform: translate3d(0, 10px, 0);
  }

  .swim-tooltip__panel--animate.swim-tooltip__panel--position-right,
  .swim-tooltip__panel--animate.swim-tooltip__panel--position-left,
  .swim-tooltip__panel--animate.swim-tooltip__panel--position-top,
  .swim-tooltip__panel--animate.swim-tooltip__panel--position-bottom {
    transform: translate3d(0, 0, 0);
  }

  /* Caret */
  .swim-tooltip__caret {
    position: absolute;
    z-index: 5001;
    width: 0;
    height: 0;
  }

  .swim-tooltip__caret--position-left {
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 7px solid var(--swim-tooltip-caret-bg, var(--grey-200));
  }

  .swim-tooltip__caret--position-top {
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid var(--swim-tooltip-caret-bg, var(--grey-200));
  }

  .swim-tooltip__caret--position-right {
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 7px solid var(--swim-tooltip-caret-bg, var(--grey-200));
  }

  .swim-tooltip__caret--position-bottom {
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid var(--swim-tooltip-caret-bg, var(--grey-200));
  }

  /* Type: tooltip (compact) */
  .swim-tooltip__panel--type-tooltip {
    color: var(--grey-700);
    background: var(--grey-200);
    font-size: var(--font-size-xs);
    padding: var(--spacing-4, 4px);
    text-align: center;
  }

  /* Type: popover */
  .swim-tooltip__panel--type-popover {
    background: var(--grey-200);
    color: var(--grey-700);
    box-shadow: var(--shadow-2);
    font-size: var(--font-size-s);
    padding: var(--spacing-10, 10px);
  }

  .swim-tooltip__content {
    display: block;
  }
`, La = [y, Ba];
var O = /* @__PURE__ */ ((o) => (o.top = "top", o.bottom = "bottom", o.left = "left", o.right = "right", o))(O || {}), le = /* @__PURE__ */ ((o) => (o.top = "top", o.bottom = "bottom", o.left = "left", o.right = "right", o.center = "center", o))(le || {}), So = /* @__PURE__ */ ((o) => (o.popover = "popover", o.tooltip = "tooltip", o))(So || {}), we = /* @__PURE__ */ ((o) => (o.all = "all", o.focus = "focus", o.click = "click", o.mouseover = "mouseover", o))(we || {});
const ce = 7;
function It(o, e, t) {
  return t === le.left ? (o.left ?? 0) - ce : t === le.right ? (o.left ?? 0) + (o.width ?? 0) - (e.width ?? 0) + ce : (o.left ?? 0) + (o.width ?? 0) / 2 - (e.width ?? 0) / 2;
}
function pi(o, e, t) {
  return t === le.top ? (o.top ?? 0) - ce : t === le.bottom ? (o.top ?? 0) + (o.height ?? 0) - (e.height ?? 0) + ce : (o.top ?? 0) + (o.height ?? 0) / 2 - (e.height ?? 0) / 2;
}
function js(o, e, t) {
  let i = It(o, e, t);
  return i + (e.width ?? 0) > window.innerWidth && (i = window.innerWidth - (e.width ?? 0)), i;
}
function Ws(o, e, t) {
  let i = pi(o, e, t);
  return i + (e.height ?? 0) > window.innerHeight && (i = window.innerHeight - (e.height ?? 0)), i;
}
function qa(o, e, t, i, s) {
  return t === O.right ? It(o, e, i) + (e.width ?? 0) + s > window.innerWidth : t === O.left ? It(o, e, i) - s < 0 : t === O.top ? (o.top ?? 0) - (e.height ?? 0) - s < 0 : t === O.bottom ? pi(o, e, i) + (e.height ?? 0) + s > window.innerHeight : !1;
}
function Ha(o, e, t, i, s) {
  return qa(t, e, o, s, i) ? o === O.right ? O.left : o === O.left ? O.right : o === O.top ? O.bottom : O.top : o;
}
function Va(o, e, t, i, s) {
  let r = 0, n = 0;
  return o === O.right ? (n = (t.left ?? 0) + (t.width ?? 0) + i, r = Ws(t, e, s)) : o === O.left ? (n = (t.left ?? 0) - (e.width ?? 0) - i, r = Ws(t, e, s)) : o === O.top ? (r = (t.top ?? 0) - (e.height ?? 0) - i, n = js(t, e, s)) : (r = (t.top ?? 0) + (t.height ?? 0) + i, n = js(t, e, s)), { top: r, left: n };
}
function Qs(o, e, t, i) {
  let s;
  i === le.left ? s = (o.width ?? 0) / 2 - (t.width ?? 0) / 2 + ce : i === le.right ? s = (e.width ?? 0) - (o.width ?? 0) / 2 - (t.width ?? 0) / 2 - ce : s = (e.width ?? 0) / 2 - (t.width ?? 0) / 2;
  const r = It(o, e, i);
  return r + (e.width ?? 0) > window.innerWidth && (s += r + (e.width ?? 0) - window.innerWidth), s;
}
function Zs(o, e, t, i) {
  let s;
  i === le.top ? s = (o.height ?? 0) / 2 - (t.height ?? 0) / 2 + ce : i === le.bottom ? s = (e.height ?? 0) - (o.height ?? 0) / 2 - (t.height ?? 0) / 2 - ce : s = (e.height ?? 0) / 2 - (t.height ?? 0) / 2;
  const r = pi(o, e, i);
  return r + (e.height ?? 0) > window.innerHeight && (s += r + (e.height ?? 0) - window.innerHeight), s;
}
function Ra(o, e, t, i, s) {
  let r = 0, n = 0;
  return o === O.right ? (n = -ce, r = Zs(t, e, i, s)) : o === O.left ? (n = e.width ?? 0, r = Zs(t, e, i, s)) : o === O.top ? (r = e.height ?? 0, n = Qs(t, e, i, s)) : (r = -ce, n = Qs(t, e, i, s)), { top: r, left: n };
}
var Ya = Object.defineProperty, Ua = Object.getOwnPropertyDescriptor, P = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Ua(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && Ya(e, t, s), s;
};
const Xs = "swim-tooltip", qi = class qi extends _ {
  constructor() {
    super(...arguments), this.content = "", this.placement = O.top, this.alignment = le.center, this.type = So.popover, this.showEvent = we.all, this._spacing = 10, this._showCaret = !0, this._disabled = !1, this._closeOnClickOutside = !0, this._closeOnMouseLeave = !0, this._hideTimeout = 300, this._showTimeout = 100, this.cssClass = "", this._open = !1, this._panelTop = 0, this._panelLeft = 0, this._effectivePlacement = O.top, this._caretTop = 0, this._caretLeft = 0, this._animate = !1, this._triggerRef = null, this._panelRef = null, this._caretRef = null, this._boundDocumentClick = null, this._openFromClick = !1, this._tooltipId = `swim-tooltip-${Math.random().toString(36).slice(2, 11)}`, this._throttledPosition = () => {
      this._throttleTimeout == null && (this._throttleTimeout = window.setTimeout(() => {
        this._throttleTimeout = void 0, this._open && this._position();
      }, 100));
    }, this._panelForHideListeners = null, this._panelMouseEnterBound = () => this._clearHideTimer(), this._panelMouseLeaveBound = (e) => {
      var i;
      const t = e.relatedTarget;
      t && ((i = this._triggerRef) != null && i.contains(t)) || this.hide();
    }, this._onTriggerFocus = () => {
      this._listensFocus && this.show();
    }, this._onTriggerBlur = () => {
      this._listensFocus && this.hide(!0);
    }, this._onTriggerMouseEnter = () => {
      this._listensHover && this.show();
    }, this._onTriggerMouseLeave = (e) => {
      var s;
      const t = e.relatedTarget, i = this._panelRef ?? ((s = this.shadowRoot) == null ? void 0 : s.querySelector(".swim-tooltip__panel"));
      i != null && i.contains(t) || (this._listensHover && this.closeOnMouseLeave && this.hide(), this._listensClick && this.hide());
    }, this._onPanelMouseLeave = () => {
      this.closeOnMouseLeave && this.hide();
    }, this._onTriggerClick = () => {
      if (this.showEvent === we.mouseover) {
        this.hide(!0);
        return;
      }
      this._listensClick && (this._openFromClick ? this.hide(!0) : (this._openFromClick = !0, this.show(!0)));
    };
  }
  get spacing() {
    return this._spacing;
  }
  set spacing(e) {
    this._spacing = S(e, 10);
  }
  get showCaret() {
    return this._showCaret;
  }
  set showCaret(e) {
    this._showCaret = p(e);
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    this._disabled = p(e);
  }
  get closeOnClickOutside() {
    return this._closeOnClickOutside;
  }
  set closeOnClickOutside(e) {
    this._closeOnClickOutside = p(e);
  }
  get closeOnMouseLeave() {
    return this._closeOnMouseLeave;
  }
  set closeOnMouseLeave(e) {
    this._closeOnMouseLeave = p(e);
  }
  get hideTimeout() {
    return this._hideTimeout;
  }
  set hideTimeout(e) {
    this._hideTimeout = S(e, 300);
  }
  get showTimeout() {
    return this._showTimeout;
  }
  set showTimeout(e) {
    this._showTimeout = S(e, 100);
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("resize", this._throttledPosition);
  }
  disconnectedCallback() {
    window.removeEventListener("resize", this._throttledPosition), this._throttleTimeout != null && (window.clearTimeout(this._throttleTimeout), this._throttleTimeout = void 0), this._clearShowTimer(), this._clearHideTimer(), this._removeDocumentClick(), this._removePanelHideListeners(), super.disconnectedCallback();
  }
  /** Whether the host has a child with slot="content" (detected from light DOM so we can open before panel is rendered). */
  _hasContentSlot() {
    return !!this.querySelector('[slot="content"]');
  }
  get _listensFocus() {
    return this.showEvent === we.all || this.showEvent === we.focus;
  }
  get _listensHover() {
    return this.showEvent === we.all || this.showEvent === we.mouseover;
  }
  get _listensClick() {
    return this.showEvent === we.all || this.showEvent === we.click;
  }
  /** Opens the tooltip (optionally immediately, without show timeout). */
  show(e = !1) {
    if (this._open || this.disabled) return;
    this._clearShowTimer(), this._clearHideTimer();
    const t = () => {
      this._open || this.disabled || !(this._hasContentSlot || this.content != null && this.content !== "") || (this._open = !0, this._effectivePlacement = this.placement, requestAnimationFrame(() => {
        this._position(), requestAnimationFrame(() => {
          this._animate = !0, this._addHideListeners();
        });
      }), this.dispatchEvent(new CustomEvent("show", { detail: !0, bubbles: !0 })));
    };
    e ? t() : this._showTimer = window.setTimeout(t, this.showTimeout);
  }
  /** Hides the tooltip (optionally immediately). */
  hide(e = !1) {
    if (!this._open) return;
    this._clearShowTimer(), this._clearHideTimer();
    const t = () => {
      this._open && (this._open = !1, this._animate = !1, this._openFromClick = !1, this._removeDocumentClick(), this._removePanelHideListeners(), this.dispatchEvent(new CustomEvent("hide", { detail: !0, bubbles: !0 })));
    };
    e ? t() : this._hideTimer = window.setTimeout(t, this.hideTimeout);
  }
  _clearShowTimer() {
    this._showTimer != null && (window.clearTimeout(this._showTimer), this._showTimer = void 0);
  }
  _clearHideTimer() {
    this._hideTimer != null && (window.clearTimeout(this._hideTimer), this._hideTimer = void 0);
  }
  _removeDocumentClick() {
    this._boundDocumentClick && (document.removeEventListener("click", this._boundDocumentClick, !0), this._boundDocumentClick = null);
  }
  _position() {
    var d, h, w;
    const e = this._triggerRef ?? ((d = this.shadowRoot) == null ? void 0 : d.querySelector(".swim-tooltip__trigger")), t = this._panelRef ?? ((h = this.shadowRoot) == null ? void 0 : h.querySelector(".swim-tooltip__panel")), i = this._caretRef ?? ((w = this.shadowRoot) == null ? void 0 : w.querySelector(".swim-tooltip__caret"));
    if (!e || !t) return;
    const s = e.getBoundingClientRect();
    if (!s.height && !s.width) return;
    const r = t.getBoundingClientRect();
    this._effectivePlacement = Ha(this.placement, r, s, this.spacing, this.alignment);
    const { top: n, left: l } = Va(this._effectivePlacement, r, s, this.spacing, this.alignment);
    if (this._panelTop = n, this._panelLeft = l, this.showCaret && i) {
      const m = i.getBoundingClientRect(), g = Ra(this._effectivePlacement, r, s, m, this.alignment);
      this._caretTop = g.top, this._caretLeft = g.left;
    }
  }
  _removePanelHideListeners() {
    this._panelForHideListeners && (this._panelForHideListeners.removeEventListener("mouseenter", this._panelMouseEnterBound), this._panelForHideListeners.removeEventListener("mouseleave", this._panelMouseLeaveBound), this._panelForHideListeners = null);
  }
  _addHideListeners() {
    var t;
    const e = this._panelRef ?? ((t = this.shadowRoot) == null ? void 0 : t.querySelector(".swim-tooltip__panel"));
    e && (this._removePanelHideListeners(), this._panelForHideListeners = e, e.addEventListener("mouseenter", this._panelMouseEnterBound), this.closeOnMouseLeave && e.addEventListener("mouseleave", this._panelMouseLeaveBound), this.closeOnClickOutside && (this._boundDocumentClick = (i) => {
      var r;
      const s = i.target;
      e.contains(s) || (r = this._triggerRef) != null && r.contains(s) || this.hide(!0);
    }, setTimeout(() => document.addEventListener("click", this._boundDocumentClick, !0), 0)));
  }
  firstUpdated() {
    var e, t, i;
    this._triggerRef = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".swim-tooltip__trigger"), this._panelRef = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".swim-tooltip__panel"), this._caretRef = (i = this.shadowRoot) == null ? void 0 : i.querySelector(".swim-tooltip__caret");
  }
  updated(e) {
    this._open && (e.has("placement") || e.has("alignment") || e.has("spacing")) && this._position();
  }
  render() {
    const e = this._hasContentSlot(), t = e || this.content != null && this.content !== "", i = [
      "swim-tooltip__panel",
      `swim-tooltip__panel--type-${this.type}`,
      `swim-tooltip__panel--position-${this._effectivePlacement}`,
      this._animate ? "swim-tooltip__panel--animate" : "",
      this.cssClass.includes("narrow") ? "swim-tooltip__panel--narrow" : ""
    ].filter(Boolean).join(" ");
    return c`
      <div
        part="trigger"
        class="swim-tooltip__trigger"
        aria-describedby="${this._open && t ? this._tooltipId : u}"
        aria-expanded="${this._listensClick ? this._open ? "true" : "false" : u}"
        @focusin="${this._onTriggerFocus}"
        @focusout="${this._onTriggerBlur}"
        @mouseenter="${this._onTriggerMouseEnter}"
        @mouseleave="${this._onTriggerMouseLeave}"
        @click="${this._onTriggerClick}"
      >
        <slot></slot>
      </div>

      ${this._open && t ? c`
            <div
              part="panel"
              id="${this._tooltipId}"
              class="${i}"
              style="top: ${this._panelTop}px; left: ${this._panelLeft}px;"
              role="tooltip"
              aria-hidden="false"
              @mouseenter="${() => this._clearHideTimer()}"
              @mouseleave="${this._onPanelMouseLeave}"
            >
              ${this.showCaret ? c`
                    <span
                      part="caret"
                      class="swim-tooltip__caret swim-tooltip__caret--position-${this._effectivePlacement}"
                      style="top: ${this._caretTop}px; left: ${this._caretLeft}px;"
                    ></span>
                  ` : ""}
              <div part="content" class="swim-tooltip__content">
                ${e ? c`<slot name="content"></slot>` : c`${Fa(this.content)}`}
              </div>
            </div>
          ` : ""}
    `;
  }
};
qi.styles = La;
let M = qi;
P([
  a({ type: String })
], M.prototype, "content", 2);
P([
  a({ type: String, reflect: !0, attribute: "placement" })
], M.prototype, "placement", 2);
P([
  a({ type: String, reflect: !0, attribute: "alignment" })
], M.prototype, "alignment", 2);
P([
  a({ type: String, reflect: !0, attribute: "type" })
], M.prototype, "type", 2);
P([
  a({ type: String, attribute: "show-event" })
], M.prototype, "showEvent", 2);
P([
  a({ type: Number, attribute: "spacing" })
], M.prototype, "spacing", 1);
P([
  a({
    type: Boolean,
    attribute: "show-caret",
    converter: {
      fromAttribute: (o) => o !== "false",
      toAttribute: (o) => o ? "" : "false"
    }
  })
], M.prototype, "showCaret", 1);
P([
  a({ type: Boolean, reflect: !0 })
], M.prototype, "disabled", 1);
P([
  a({ type: Boolean, attribute: "close-on-click-outside" })
], M.prototype, "closeOnClickOutside", 1);
P([
  a({ type: Boolean, attribute: "close-on-mouse-leave" })
], M.prototype, "closeOnMouseLeave", 1);
P([
  a({ type: Number, attribute: "hide-timeout" })
], M.prototype, "hideTimeout", 1);
P([
  a({ type: Number, attribute: "show-timeout" })
], M.prototype, "showTimeout", 1);
P([
  a({ type: String, attribute: "css-class" })
], M.prototype, "cssClass", 2);
P([
  b()
], M.prototype, "_open", 2);
P([
  b()
], M.prototype, "_panelTop", 2);
P([
  b()
], M.prototype, "_panelLeft", 2);
P([
  b()
], M.prototype, "_effectivePlacement", 2);
P([
  b()
], M.prototype, "_caretTop", 2);
P([
  b()
], M.prototype, "_caretLeft", 2);
P([
  b()
], M.prototype, "_animate", 2);
customElements.get(Xs) || customElements.define(Xs, M);
const Na = 40, Ga = 2, Ja = f`
  :host {
    --swim-navbar-bar-size: ${Na}px;
    --swim-navbar-bar-thickness: ${Ga}px;
    display: inline-flex;
    align-items: center;
    min-height: 50px;
    position: relative;
    background-color: var(--grey-825);
    box-sizing: border-box;
  }

  .swim-navbar__nav-items {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .swim-navbar__bar-track {
    min-height: var(--swim-navbar-bar-thickness);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .swim-navbar__bar {
    position: absolute;
    width: var(--swim-navbar-bar-size);
    height: var(--swim-navbar-bar-thickness);
    background-color: var(--blue-500);
    transition: transform 300ms cubic-bezier(0.35, 0, 0.25, 1);
  }

  .swim-navbar__bar--bottom {
    bottom: 0;
  }

  .swim-navbar__bar--top {
    top: 0;
  }

  :host([bar-at-top]) .swim-navbar__bar-track {
    top: 0;
    bottom: auto;
  }
`, Ka = f`
  :host {
    display: flex;
    font-size: var(--font-size-xl);
    color: var(--grey-400);
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    padding: var(--spacing-8) 10px var(--spacing-0) 10px;
    box-sizing: border-box;
  }

  :host(:focus) {
    outline: none;
  }

  :host(:focus-visible) {
    outline: 2px solid var(--blue-400);
    outline-offset: 2px;
    border-radius: var(--radius-2);
  }

  :host(:hover),
  :host(.swim-navbar-item--active) {
    color: var(--blue-400);
  }
`;
var ja = Object.defineProperty, Wa = Object.getOwnPropertyDescriptor, mi = (o, e, t, i) => {
  for (var s = Wa(e, t), r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = n(e, t, s) || s);
  return s && ja(e, t, s), s;
};
const eo = "swim-navbar-item", Hi = class Hi extends _ {
  constructor() {
    super(...arguments), this._active = 0, this._total = 0, this._index = 0, this._clickBound = () => this._handleClick();
  }
  get active() {
    return this._active;
  }
  set active(e) {
    const t = S(e, 0);
    if (this._active !== t) {
      const i = this._active;
      this._active = t, this.requestUpdate("active", i);
    }
  }
  get total() {
    return this._total;
  }
  set total(e) {
    this._total = S(e, 0);
  }
  get index() {
    return this._index;
  }
  set index(e) {
    const t = S(e, 0);
    if (this._index !== t) {
      const i = this._index;
      this._index = t, this.requestUpdate("index", i);
    }
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", this._clickBound);
  }
  disconnectedCallback() {
    this.removeEventListener("click", this._clickBound), super.disconnectedCallback();
  }
  render() {
    const e = this._active === this._index;
    return c`
      <div
        class="swim-navbar-item ${e ? "swim-navbar-item--active" : ""}"
        role="tab"
        aria-selected="${e}"
        tabindex="${e ? 0 : -1}"
        @keydown="${this._handleKeyDown}"
      >
        <slot></slot>
      </div>
    `;
  }
  /**
   * Activate this item (sets active to index and dispatches active-change).
   * Called by parent navbar or programmatically.
   */
  setActive() {
    this._active !== this._index && (this._active = this._index, this.requestUpdate(), this.dispatchEvent(
      new CustomEvent("active-change", {
        detail: this._index,
        bubbles: !0,
        composed: !0
      })
    ));
  }
  _handleClick() {
    this.setActive();
  }
  _handleKeyDown(e) {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.setActive());
  }
};
Hi.styles = [y, Ka];
let Be = Hi;
mi([
  a({ type: Number })
], Be.prototype, "active");
mi([
  a({ type: Number })
], Be.prototype, "total");
mi([
  a({ type: Number })
], Be.prototype, "index");
customElements.get(eo) || customElements.define(eo, Be);
var Qa = Object.defineProperty, Za = Object.getOwnPropertyDescriptor, Vt = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Za(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && Qa(e, t, s), s;
};
const Xa = 40, to = "swim-navbar", Vi = class Vi extends _ {
  constructor() {
    super(...arguments), this._barAtTop = !1, this._active = 0, this._navItems = [], this._slotChangeBound = () => this._syncFromSlot(), this._activeChangeBound = (e) => this._onItemActiveChange(e);
  }
  get barAtTop() {
    return this._barAtTop;
  }
  set barAtTop(e) {
    this._barAtTop = p(e);
  }
  get active() {
    return this._active;
  }
  set active(e) {
    const t = S(e, 0);
    t !== this._active && !isNaN(t) && t >= 0 && (!this._navItems.length || t < this._navItems.length) && (this._active = t, this._syncItems(), this.dispatchEvent(
      new CustomEvent("active-change", {
        detail: this._active,
        bubbles: !0,
        composed: !0
      })
    ));
  }
  connectedCallback() {
    super.connectedCallback(), requestAnimationFrame(() => this._syncFromSlot());
  }
  firstUpdated() {
    var t;
    this._syncFromSlot();
    const e = this._slotEl ?? ((t = this.shadowRoot) == null ? void 0 : t.querySelector("slot"));
    e && e.addEventListener("slotchange", this._slotChangeBound);
  }
  disconnectedCallback() {
    var t;
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector("slot");
    e && e.removeEventListener("slotchange", this._slotChangeBound), this._navItems.forEach((i) => {
      i.removeEventListener("active-change", this._activeChangeBound);
    }), super.disconnectedCallback();
  }
  /**
   * Activate the item at the given index (zero-based). No-op if index is out of range or already active.
   */
  goTo(e) {
    const t = S(e, -1);
    if (t >= 0 && t < this._navItems.length && t !== this._active) {
      const i = this._navItems[t];
      i && i.setActive();
    }
  }
  _syncFromSlot() {
    var s;
    const e = this._slotEl ?? ((s = this.shadowRoot) == null ? void 0 : s.querySelector("slot"));
    let t = (e == null ? void 0 : e.assignedElements({ flatten: !0 })) ?? [];
    t.length === 0 && (t = Array.from(this.children));
    const i = t.filter((r) => r instanceof Be);
    this._navItems.forEach((r) => {
      r.removeEventListener("active-change", this._activeChangeBound);
    }), this._navItems = i, i.forEach((r) => {
      r.addEventListener("active-change", this._activeChangeBound);
    }), this._syncItems();
  }
  _syncItems() {
    const e = this._active, t = this._navItems.length;
    this._navItems.forEach((i, s) => {
      i.index = s, i.total = t, i.active = e;
    });
  }
  _onItemActiveChange(e) {
    const t = e.detail;
    typeof t != "number" || t === this._active || t >= 0 && t < this._navItems.length && (this._active = t, this._syncItems(), this.requestUpdate(), this.dispatchEvent(
      new CustomEvent("active-change", {
        detail: this._active,
        bubbles: !0,
        composed: !0
      })
    ));
  }
  _getBarTransform() {
    const e = this._navItems.filter((t, i) => i < this._active).length;
    return `translateX(${Xa * e}px)`;
  }
  render() {
    const e = this._barAtTop;
    return c`
      <div class="swim-navbar__nav-items" part="nav-items" role="tablist">
        <slot></slot>
      </div>
      <div class="swim-navbar__bar-track" part="bar-track">
        <div
          class="swim-navbar__bar ${e ? "swim-navbar__bar--top" : "swim-navbar__bar--bottom"}"
          part="bar"
          style="transform: ${this._getBarTransform()}"
        ></div>
      </div>
    `;
  }
};
Vi.styles = [y, Ja];
let Le = Vi;
Vt([
  q("slot")
], Le.prototype, "_slotEl", 2);
Vt([
  a({ type: Boolean, reflect: !0, attribute: "bar-at-top" })
], Le.prototype, "barAtTop", 1);
Vt([
  a({ type: Number })
], Le.prototype, "active", 1);
Vt([
  b()
], Le.prototype, "_navItems", 2);
customElements.get(to) || customElements.define(to, Le);
const el = [
  y,
  f`
    :host {
      display: block;
    }

    .swim-list__headers-container {
      padding-inline: var(--spacing-16);
      margin-inline: var(--spacing-16);
      display: grid;
      gap: var(--spacing-16);
      align-items: center;
    }

    .swim-list__headers-container--scrollable {
      margin-right: 1.75rem;
    }

    .swim-list__header-cell {
      color: var(--white);
      font-size: var(--font-size-s);
      font-weight: var(--font-weight-bold);
      line-height: 22px;
    }

    .swim-list__divider {
      border-top: 1px solid var(--grey-600);
      border-bottom: 1px solid var(--grey-600);
      opacity: 0.75;
      margin: 0.75rem 0 0.5rem 0;
    }

    .swim-list__rows-container {
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    .swim-list__row {
      background-color: var(--grey-800);
      border: 1px solid var(--grey-600);
      border-radius: var(--radius-4);
      display: grid;
      align-items: center;
      height: 40px;
      margin: 0.25rem 1rem 0 1rem;
      padding-inline: var(--spacing-16);
      position: relative;
      gap: var(--spacing-16);
      box-sizing: border-box;
    }

    .swim-list__row::before {
      content: '';
      width: 3px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      border-top-left-radius: var(--radius-4);
      border-bottom-left-radius: var(--radius-4);
    }

    .swim-list__row--error::before {
      background-color: var(--red-500);
    }

    .swim-list__row--success::before {
      background-color: var(--green-500);
    }

    .swim-list__row--warning::before {
      background-color: var(--orange-400);
    }

    .swim-list__cell {
      color: var(--grey-050);
      font-size: var(--font-size-m);
      line-height: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `
];
var at = /* @__PURE__ */ ((o) => (o.Error = "error", o.Success = "success", o.Warning = "warning", o))(at || {}), tl = Object.defineProperty, il = Object.getOwnPropertyDescriptor, Ce = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? il(e, t) : e, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(e, t, s) : n(s)) || s);
  return i && s && tl(e, t, s), s;
};
const io = 44, so = "swim-list", Ri = class Ri extends _ {
  constructor() {
    super(...arguments), this.columnLayout = "", this.dataSource = [], this.defaultRowStatus = at.Error, this.headerLabels = [], this.columns = [], this._hasScrollbar = !1, this._page = 1, this._rowsContainer = null, this._scrollBound = (e) => this._emitScrollChanges(e);
  }
  get height() {
    return this._height;
  }
  set height(e) {
    this._height = e === void 0 ? void 0 : S(e);
  }
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated() {
    var e;
    this._rowsContainer = ((e = this.renderRoot) == null ? void 0 : e.querySelector(".swim-list__rows-container")) ?? null, this._rowsContainer && (this._rowsContainer.addEventListener("scroll", this._scrollBound), requestAnimationFrame(() => {
      var t;
      if (this._updateScrollbarState(), (t = this.paginationConfig) != null && t.index && this.paginationConfig.index > 1 && this.paginationConfig.pageSize > 0) {
        this._page = this.paginationConfig.index;
        const i = io * (this.paginationConfig.pageSize * (this._page - 1));
        this._rowsContainer.scrollTo({ top: i });
      }
    }));
  }
  disconnectedCallback() {
    this._rowsContainer && (this._rowsContainer.removeEventListener("scroll", this._scrollBound), this._rowsContainer = null), super.disconnectedCallback();
  }
  updated(e) {
    (e.has("dataSource") || e.has("height")) && this._updateScrollbarState();
  }
  _updateScrollbarState() {
    this._rowsContainer && (this._hasScrollbar = this._rowsContainer.scrollHeight > this._rowsContainer.clientHeight);
  }
  _emitScrollChanges(e) {
    var r;
    const i = e.target.scrollTop;
    this.dispatchEvent(new CustomEvent("scroll", { detail: i, bubbles: !0 }));
    const s = (r = this.paginationConfig) == null ? void 0 : r.pageSize;
    if (s) {
      const n = Math.floor(i / io), l = Math.floor(n / s) + 1;
      l !== this._page && (this._page = l, this.dispatchEvent(new CustomEvent("page-change", { detail: l, bubbles: !0 })));
    }
  }
  _getGridStyle() {
    const e = Math.max(this.headerLabels.length, this.columns.length, 1);
    return this.columnLayout && this.columnLayout.trim() ? this.columnLayout.trim() : `repeat(${e}, 1fr)`;
  }
  _getRowStatus(e) {
    const t = e.status;
    return t === at.Error || t === at.Success || t === at.Warning ? t : this.defaultRowStatus;
  }
  _getCellValue(e, t, i) {
    if (t === "$index")
      return `${i + 1}.`;
    const s = e[t];
    return s == null ? "" : String(s);
  }
  render() {
    const e = this._getGridStyle(), t = Math.max(this.headerLabels.length, this.columns.length, 1), i = this.headerLabels.length >= t ? this.headerLabels.slice(0, t) : [...this.headerLabels, ...Array(t - this.headerLabels.length).fill("")];
    return c`
      <div
        class="swim-list__headers-container ${this._hasScrollbar ? "swim-list__headers-container--scrollable" : ""}"
        style="grid-template-columns: ${e}"
      >
        ${i.map((s) => c`<span class="swim-list__header-cell">${s}</span>`)}
      </div>
      <hr class="swim-list__divider" />
      <div class="swim-list__rows-container" style=${this._height !== void 0 ? `height: ${this._height}px` : ""}>
        ${this.dataSource.map((s, r) => {
      const n = this._getRowStatus(s);
      return c`
            <div class="swim-list__row swim-list__row--${n}" style="grid-template-columns: ${e}">
              ${this.columns.map(
        (l) => c` <span class="swim-list__cell">${this._getCellValue(s, l, r)}</span> `
      )}
            </div>
          `;
    })}
      </div>
    `;
  }
};
Ri.styles = el;
let ee = Ri;
Ce([
  a({ type: String, attribute: "column-layout" })
], ee.prototype, "columnLayout", 2);
Ce([
  a({ type: Array, attribute: !1 })
], ee.prototype, "dataSource", 2);
Ce([
  a({ type: Number })
], ee.prototype, "height", 1);
Ce([
  a({ attribute: !1 })
], ee.prototype, "paginationConfig", 2);
Ce([
  a({ type: String, attribute: "default-row-status", reflect: !0 })
], ee.prototype, "defaultRowStatus", 2);
Ce([
  a({ type: Array, attribute: !1 })
], ee.prototype, "headerLabels", 2);
Ce([
  a({ type: Array, attribute: !1 })
], ee.prototype, "columns", 2);
Ce([
  b()
], ee.prototype, "_hasScrollbar", 2);
Ce([
  b()
], ee.prototype, "_page", 2);
customElements.get(so) || customElements.define(so, ee);
const ml = {
  // Blue
  blue100: "rgb(224, 239, 255)",
  blue200: "rgb(173, 212, 255)",
  blue300: "rgb(122, 185, 255)",
  blue400: "rgb(71, 158, 255)",
  blue500: "rgb(20, 131, 255)",
  blue600: "rgb(0, 106, 224)",
  blue700: "rgb(0, 82, 173)",
  blue800: "rgb(0, 58, 122)",
  blue900: "rgb(0, 34, 71)",
  // Light Blue
  lightblue100: "rgb(234, 249, 255)",
  lightblue200: "rgb(184, 234, 254)",
  lightblue300: "rgb(134, 219, 253)",
  lightblue400: "rgb(84, 205, 252)",
  lightblue500: "rgb(34, 190, 251)",
  lightblue600: "rgb(4, 166, 230)",
  lightblue700: "rgb(3, 130, 180)",
  lightblue800: "rgb(2, 94, 130)",
  lightblue900: "rgb(1, 58, 80)",
  // Green
  green100: "rgb(206, 249, 240)",
  green200: "rgb(161, 243, 226)",
  green300: "rgb(116, 237, 212)",
  green400: "rgb(71, 231, 198)",
  green500: "rgb(29, 222, 182)",
  green600: "rgb(23, 177, 145)",
  green700: "rgb(17, 132, 108)",
  green800: "rgb(11, 87, 71)",
  green900: "rgb(5, 42, 34)",
  // Orange
  orange100: "rgb(255, 244, 224)",
  orange200: "rgb(255, 225, 173)",
  orange300: "rgb(255, 206, 122)",
  orange400: "rgb(255, 187, 71)",
  orange500: "rgb(255, 168, 20)",
  orange600: "rgb(224, 141, 0)",
  orange700: "rgb(173, 109, 0)",
  orange800: "rgb(122, 77, 0)",
  orange900: "rgb(71, 45, 0)",
  // Red
  red100: "rgb(255, 230, 224)",
  red200: "rgb(255, 190, 173)",
  red300: "rgb(255, 150, 122)",
  red400: "rgb(255, 109, 71)",
  red500: "rgb(255, 69, 20)",
  red600: "rgb(224, 47, 0)",
  red700: "rgb(173, 36, 0)",
  red800: "rgb(122, 25, 0)",
  red900: "rgb(71, 15, 0)",
  // Purple
  purple100: "rgb(255, 255, 255)",
  purple200: "rgb(239, 234, 252)",
  purple300: "rgb(205, 190, 245)",
  purple400: "rgb(172, 145, 239)",
  purple500: "rgb(138, 101, 232)",
  purple600: "rgb(104, 57, 225)",
  purple700: "rgb(78, 30, 201)",
  purple800: "rgb(61, 23, 157)",
  purple900: "rgb(44, 17, 112)",
  // Grey
  grey050: "rgb(235, 237, 242)",
  grey100: "rgb(205, 210, 221)",
  grey150: "rgb(190, 197, 211)",
  grey200: "rgb(175, 183, 200)",
  grey250: "rgb(160, 170, 190)",
  grey300: "rgb(144, 156, 180)",
  grey350: "rgb(129, 143, 169)",
  grey400: "rgb(114, 129, 159)",
  grey450: "rgb(100, 116, 147)",
  grey500: "rgb(90, 104, 132)",
  grey550: "rgb(80, 92, 117)",
  grey600: "rgb(69, 80, 102)",
  grey650: "rgb(59, 68, 87)",
  grey700: "rgb(49, 56, 71)",
  grey725: "rgb(43, 50, 64)",
  grey750: "rgb(38, 44, 56)",
  grey775: "rgb(33, 38, 49)",
  grey800: "rgb(28, 32, 41)",
  grey825: "rgb(23, 26, 33)",
  grey850: "rgb(18, 20, 26)",
  grey875: "rgb(12, 14, 18)",
  grey900: "rgb(7, 8, 11)",
  // Base
  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)"
}, bl = {
  // Font sizes
  fontSizeBase: "16px",
  fontSizeXXS: "0.625rem",
  // 10px
  fontSizeXS: "0.75rem",
  // 12px
  fontSizeS: "0.875rem",
  // 14px
  fontSizeM: "1rem",
  // 16px
  fontSizeL: "1.125rem",
  // 18px
  fontSizeXL: "1.25rem",
  // 20px
  fontSize2XL: "1.5rem",
  // 24px
  fontSize3XL: "1.75rem",
  // 28px
  fontSize4XL: "2rem",
  // 32px
  fontSize5XL: "2.25rem",
  // 36px
  fontSize6XL: "3rem",
  // 48px
  // Line heights
  fontLineHeight100: "1.1",
  fontLineHeight200: "1.42",
  fontLineHeight300: "20px",
  fontLineHeight400: "40px",
  // Font weights
  fontWeightLight: "300",
  fontWeightRegular: "400",
  fontWeightSemibold: "600",
  fontWeightBold: "700"
}, gl = {
  spacing0: "0",
  spacing2: "2px",
  spacing4: "4px",
  spacing8: "8px",
  spacing10: "10px",
  spacing16: "16px",
  spacing24: "24px",
  spacing32: "32px"
}, fl = {
  radius2: "2px",
  radius4: "4px",
  radius8: "8px"
};
export {
  le as AlignmentType,
  uo as ButtonGroupOrientation,
  mo as ButtonGroupStyle,
  po as ButtonGroupVariant,
  Y as ButtonState,
  fo as CardAppearance,
  go as CardOrientation,
  _o as CardPlaceholderSize,
  pt as CardStatus,
  vr as DAYS_OF_WEEK,
  se as DateDisplayType,
  D as DateTimeType,
  nt as DialogFormat,
  Re as DrawerDirection,
  Mn as DrawerPosition,
  hi as InputAppearance,
  ui as InputSize,
  fe as InputTypes,
  at as ListRowStatus,
  wr as MONTHS_SHORT,
  O as PlacementType,
  Ve as ProgressSpinnerMode,
  pl as SWIM_ICON_FONT_FAMILY,
  yo as SectionAppearance,
  we as ShowType,
  _e as SpinnerAppearance,
  Ye as SplitDirection,
  So as StyleType,
  U as SwimButton,
  Ge as SwimButtonGroup,
  ve as SwimButtonToggle,
  ne as SwimButtonToggleGroup,
  N as SwimCalendar,
  G as SwimCard,
  Ke as SwimCardAvatar,
  Xt as SwimCardBody,
  Et as SwimCardFooter,
  mt as SwimCardHeader,
  zt as SwimCardPlaceholder,
  Z as SwimCheckbox,
  v as SwimDateTime,
  $ as SwimDialog,
  J as SwimDrawer,
  Se as SwimIcon,
  A as SwimInput,
  ye as SwimLargeFormatDialogContent,
  St as SwimLargeFormatDialogFooter,
  ee as SwimList,
  Le as SwimNavbar,
  Be as SwimNavbarItem,
  L as SwimProgressSpinner,
  j as SwimRadio,
  oe as SwimRadioGroup,
  K as SwimSection,
  ei as SwimSectionHeader,
  E as SwimSelect,
  F as SwimSlider,
  bt as SwimSplit,
  $e as SwimSplitArea,
  gt as SwimSplitHandle,
  ae as SwimTab,
  Fe as SwimTabs,
  X as SwimToggle,
  M as SwimTooltip,
  zo as TabsAppearance,
  yt as TogglePosition,
  y as baseStyles,
  qr as cardComponentStyles,
  Br as cardHorizontalStyles,
  Fr as cardStyles,
  Lr as cardVerticalStyles,
  p as coerceBooleanProperty,
  S as coerceNumberProperty,
  ml as colors,
  ir as convertClass,
  st as formatDate,
  ns as getDecadeStartYear,
  dl as getEffectiveDisplayFormat,
  Mr as getEffectiveInputFormat,
  ie as getMonth,
  ll as globalStyles,
  or as iconRegistry,
  Kt as isAfterDate,
  Jt as isBeforeDate,
  hs as isOutOfRange,
  Qt as isSameDay,
  cl as isSameMonth,
  yr as isSameYear,
  B as isValidDate,
  Zt as normalizeTimezone,
  ul as openDrawer,
  Je as parseDate,
  fl as radius,
  Dr as resolveFormat,
  ds as roundToPrecision,
  _t as scrollbarStyles,
  gl as spacing,
  hl as toNativeInputValue,
  bl as typography
};
