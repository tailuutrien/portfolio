import React from 'react'

const InfoItem = ({ icon, label, value, href=null }) => {
  const item = (
    <div className="flex items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {React.cloneElement(icon, {
          className: "h-5 w-5",
        })}
      </div>

      <div>
        <p className="text-sm text-muted-foreground">
          {label}
        </p>

        <p className="font-medium">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {item}
    </a>
  ) : item;
};

export default InfoItem