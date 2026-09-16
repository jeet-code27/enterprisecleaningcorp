"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Clock, 
  Calendar, 
  DollarSign, 
  Phone, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Building2 
} from "lucide-react";

type Language = "en" | "es" | "pt";

interface ContentData {
  badgeHiring: string;
  badgeVacancies: string;
  badgeLocation: string;
  jobTitle: string;
  jobSubtitle: string;
  scheduleLabel: string;
  scheduleValue: string;
  startTimeLabel: string;
  startTimeValue: string;
  shiftDurationLabel: string;
  shiftDurationValue: string;
  payLabel: string;
  payValue: string;
  weeklyHoursLabel: string;
  weeklyHoursValue: string;
  requirementsHeading: string;
  requirementsText: string;
  requirementsBullets: string[];
  contactHeading: string;
  applyOnlineBtn: string;
  directContacts: {
    name: string;
    phone: string;
    rawPhone: string;
    role: string;
  }[];
}

const CONTENT: Record<Language, ContentData> = {
  en: {
    badgeHiring: "NOW HIRING",
    badgeVacancies: "2 Part-Time Openings",
    badgeLocation: "East Greenwich, RI",
    jobTitle: "Commercial Cleaning Positions (2 Openings)",
    jobSubtitle: "We are hiring for two part-time cleaning positions in East Greenwich, Rhode Island. Great opportunity for steady evening income!",
    scheduleLabel: "Schedule",
    scheduleValue: "Monday through Friday",
    startTimeLabel: "Start Time",
    startTimeValue: "6:00 PM",
    shiftDurationLabel: "Shift Duration",
    shiftDurationValue: "3 hrs 30 mins / shift",
    payLabel: "Hourly Pay",
    payValue: "$16.00 / Hour",
    weeklyHoursLabel: "Weekly Hours",
    weeklyHoursValue: "~17.5 hours / week",
    requirementsHeading: "Who We Are Looking For",
    requirementsText: "We are looking for dependable, detail-oriented individuals who can work independently and maintain high cleaning standards.",
    requirementsBullets: [
      "Dependable, punctual & detail-oriented",
      "Ability to work independently & take pride in work",
      "Commitment to high commercial cleaning standards",
      "Reliable transportation to East Greenwich, RI",
    ],
    contactHeading: "To Apply, Please Contact Hiring Supervisors:",
    applyOnlineBtn: "Apply Online Now",
    directContacts: [
      { name: "Iris Vergara", phone: "(508) 801-4129", rawPhone: "5088014129", role: "Hiring Supervisor" },
      { name: "Juliana Amorim", phone: "(508) 304-4094", rawPhone: "5083044094", role: "Hiring Supervisor" },
    ],
  },
  es: {
    badgeHiring: "ESTAMOS CONTRATANDO",
    badgeVacancies: "2 Vacantes Disponibles",
    badgeLocation: "East Greenwich, RI",
    jobTitle: "Puestos de Limpieza Comercial (2 Vacantes)",
    jobSubtitle: "Tenemos dos puestos de limpieza de medio tiempo disponibles en East Greenwich, Rhode Island. ¡Excelente oportunidad de ingresos estables en turno vespertino!",
    scheduleLabel: "Horario",
    scheduleValue: "De lunes a viernes",
    startTimeLabel: "Hora de Inicio",
    startTimeValue: "6:00 p. m.",
    shiftDurationLabel: "Duración del Turno",
    shiftDurationValue: "3 hrs 30 mins / turno",
    payLabel: "Pago por Hora",
    payValue: "$16.00 / hora",
    weeklyHoursLabel: "Horas Semanales",
    weeklyHoursValue: "~17.5 horas / semana",
    requirementsHeading: "Perfil del Postulante",
    requirementsText: "Buscamos personas responsables, detallistas y capaces de trabajar de manera independiente, manteniendo altos estándares de limpieza.",
    requirementsBullets: [
      "Personas responsables, puntuales y detallistas",
      "Capacidad para trabajar de manera independiente",
      "Compromiso con altos estándares de limpieza",
      "Transporte confiable hacia East Greenwich, RI",
    ],
    contactHeading: "Para Postularse, Comuníquese Con:",
    applyOnlineBtn: "Postularse en Línea",
    directContacts: [
      { name: "Iris Vergara", phone: "(508) 801-4129", rawPhone: "5088014129", role: "Supervisora de Contratación" },
      { name: "Juliana Amorim", phone: "(508) 304-4094", rawPhone: "5083044094", role: "Supervisora de Contratación" },
    ],
  },
  pt: {
    badgeHiring: "ESTAMOS CONTRATANDO",
    badgeVacancies: "2 Vagas Disponíveis",
    badgeLocation: "East Greenwich, RI",
    jobTitle: "Vagas de Limpeza Comercial (2 Vagas)",
    jobSubtitle: "Temos duas vagas de limpeza em meio período disponíveis em East Greenwich, Rhode Island. Excelente oportunidade para renda extra no período noturno!",
    scheduleLabel: "Horário",
    scheduleValue: "De segunda a sexta-feira",
    startTimeLabel: "Início do Turno",
    startTimeValue: "18h (6:00 PM)",
    shiftDurationLabel: "Duração do Turno",
    shiftDurationValue: "3 hrs 30 mins / turno",
    payLabel: "Pagamento",
    payValue: "US$ 16,00 / hora",
    weeklyHoursLabel: "Horas Semanais",
    weeklyHoursValue: "~17,5 horas / semana",
    requirementsHeading: "Perfil do Candidato",
    requirementsText: "Procuramos pessoas responsáveis, detalhistas e que saibam trabalhar de forma independente, mantendo um alto padrão de limpeza.",
    requirementsBullets: [
      "Pessoas responsáveis, pontuais e detalhistas",
      "Capacidade de trabalhar de forma independente",
      "Compromisso em manter um alto padrão de limpeza",
      "Transporte confiável para East Greenwich, RI",
    ],
    contactHeading: "Para Se Candidatar, Entre em Contato Com:",
    applyOnlineBtn: "Candidatar-se Online",
    directContacts: [
      { name: "Iris Vergara", phone: "(508) 801-4129", rawPhone: "5088014129", role: "Supervisora de Contratação" },
      { name: "Juliana Amorim", phone: "(508) 304-4094", rawPhone: "5083044094", role: "Supervisora de Contratação" },
    ],
  },
};

export function EastGreenwichJobPosting() {
  const [lang, setLang] = useState<Language>("en");
  const t = CONTENT[lang];

  return (
    <div className="w-full max-w-full overflow-hidden mb-12 bg-gradient-to-br from-slate-950 via-slate-900 to-[#002b5e] rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 md:p-10 text-white shadow-2xl border-2 border-[#00B8FF]/50 relative">
      {/* Background Ambient Glows */}
      <div className="absolute -top-28 -right-28 w-56 sm:w-80 h-56 sm:h-80 bg-[#00B8FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-28 w-56 sm:w-80 h-56 sm:h-80 bg-[#E31837]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-5 sm:space-y-6 w-full max-w-full">
        {/* Top Header: Badges & Language Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 pb-4 sm:pb-5 border-b border-white/10 w-full">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#E31837] to-red-600 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg shadow-red-900/40">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {t.badgeHiring}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 bg-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/15">
              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00B8FF]" /> {t.badgeVacancies}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#00B8FF] bg-[#00B8FF]/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-[#00B8FF]/30">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00B8FF]" /> {t.badgeLocation}
            </span>
          </div>

          {/* Tri-Lingual Segmented Control: Strict 3-column grid that 100% stays inside parent width */}
          <div className="w-full sm:w-auto sm:min-w-[300px]">
            <div className="grid grid-cols-3 gap-1 bg-slate-950/90 p-1 rounded-xl border border-white/15 w-full">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`py-1.5 px-1 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center ${
                  lang === "en"
                    ? "bg-[#00B8FF] text-slate-950 font-black shadow-md"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`py-1.5 px-1 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center ${
                  lang === "es"
                    ? "bg-[#FFE800] text-slate-950 font-black shadow-md"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                Español
              </button>
              <button
                type="button"
                onClick={() => setLang("pt")}
                className={`py-1.5 px-1 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center ${
                  lang === "pt"
                    ? "bg-[#00C853] text-slate-950 font-black shadow-md"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                Português
              </button>
            </div>
          </div>
        </div>

        {/* Title & Compensation Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 w-full">
          <div className="max-w-2xl">
            <div className="text-[10px] sm:text-xs uppercase tracking-widest font-extrabold text-[#00B8FF] mb-1.5 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" /> Rhode Island Facility Cleaning Team
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
              {t.jobTitle}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
              {t.jobSubtitle}
            </p>
          </div>

          {/* Compensation Cards: 2 equal 50% columns on mobile, never exceeds screen width */}
          <div className="w-full lg:w-auto shrink-0">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
              <div className="bg-slate-950/80 border border-emerald-500/40 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 text-center flex flex-col justify-center">
                <div className="text-[9px] sm:text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                  {t.payLabel}
                </div>
                <div className="text-base sm:text-2xl font-black text-emerald-300 tracking-tight mt-0.5">
                  {t.payValue}
                </div>
              </div>

              <div className="bg-slate-950/80 border border-white/15 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 text-center flex flex-col justify-center">
                <div className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {t.weeklyHoursLabel}
                </div>
                <div className="text-xs sm:text-base font-extrabold text-white mt-0.5">
                  {t.weeklyHoursValue}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Job Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full">
          {/* Location */}
          <div className="bg-slate-950/60 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-start gap-3 hover:border-[#00B8FF]/40 transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#00B8FF]/20 text-[#00B8FF] flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">Location</div>
              <div className="text-xs sm:text-sm font-extrabold text-white truncate">East Greenwich, RI</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Rhode Island Facility</div>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-slate-950/60 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-start gap-3 hover:border-[#00B8FF]/40 transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#00B8FF]/20 text-[#00B8FF] flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{t.scheduleLabel}</div>
              <div className="text-xs sm:text-sm font-extrabold text-white truncate">{t.scheduleValue}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">5 Days a Week</div>
            </div>
          </div>

          {/* Shift Time */}
          <div className="bg-slate-950/60 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-start gap-3 hover:border-[#00B8FF]/40 transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#00B8FF]/20 text-[#00B8FF] flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{t.startTimeLabel}</div>
              <div className="text-xs sm:text-sm font-extrabold text-white truncate">{t.startTimeValue}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Evening Shift</div>
            </div>
          </div>

          {/* Shift Length */}
          <div className="bg-slate-950/60 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-start gap-3 hover:border-[#00B8FF]/40 transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{t.shiftDurationLabel}</div>
              <div className="text-xs sm:text-sm font-extrabold text-white truncate">{t.shiftDurationValue}</div>
              <div className="text-[10px] sm:text-[11px] text-emerald-400 font-semibold">{t.payValue}</div>
            </div>
          </div>
        </div>

        {/* Requirements Block */}
        <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 w-full">
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white mb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00B8FF]" /> {t.requirementsHeading}
          </h4>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base font-medium mb-3 italic leading-relaxed">
            "{t.requirementsText}"
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/10">
            {t.requirementsBullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Supervisors Directly & Apply CTA */}
        <div className="pt-3 border-t border-white/10 space-y-3.5 w-full">
          <div className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#00B8FF]" /> {t.contactHeading}
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4 w-full">
            {t.directContacts.map((contact, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 border border-white/15 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shadow-md hover:border-[#00B8FF]/50 transition-all w-full"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-black text-white">{contact.name}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 font-medium">{contact.role}</div>
                  </div>
                </div>

                <a
                  href={`tel:${contact.rawPhone}`}
                  className="w-full sm:w-auto px-4 py-2 bg-[#00B8FF] hover:bg-[#38bdf8] active:scale-95 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                  title={`Call ${contact.name} directly`}
                >
                  <Phone className="w-3.5 h-3.5 fill-slate-950" />
                  <span className="tracking-wide font-extrabold">{contact.phone}</span>
                </a>
              </div>
            ))}
          </div>

          {/* Apply Online Button */}
          <div className="pt-1 w-full">
            <a
              href="#apply-form"
              className="w-full py-3.5 sm:py-4 px-5 bg-[#E31837] hover:bg-red-600 active:scale-[0.99] text-white font-extrabold text-xs sm:text-sm md:text-base rounded-xl sm:rounded-2xl shadow-xl shadow-red-700/30 hover:shadow-red-600/50 transition-all text-center flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>{t.applyOnlineBtn}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
